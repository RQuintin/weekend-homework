import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {TokenStorageServiceService} from '../service/token/token-storage-service.service';
import {AuthApiService} from '../service/api/auth-api.service';
import {catchError, filter, switchMap, take} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private tokenStorage: TokenStorageServiceService, public authService: AuthApiService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.tokenStorage.token()) {
      request = this.addToken(request, this.tokenStorage.token());
    }
    if (next.handle(request).pipe(catchError(err => {
      if (err instanceof HttpResponse && err.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(err);
      }
    }))) {
      return next.handle(request);
    }

  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({setHeaders: {Authorization: token}});
  }

  // tslint:disable-next-line:typedef:
  private handle401Error(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(authResponse => {
          this.isRefreshing = false;
          // @ts-ignore
          if (authResponse.success) {
            // @ts-ignore
            this.refreshTokenSubject.next(authResponse.data);
            // @ts-ignore
            return next.handle(this.addToken(request, authResponse.data.jwt));
          }
        }
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}
