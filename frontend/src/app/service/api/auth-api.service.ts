import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {AuthResponse} from '../../model/auth-response';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthModel} from '../../model/login/auth-model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  loginFrom: AuthModel;

  constructor(private http: HttpClient) {
  }

  login(): Observable<AuthResponse> {
    return this.http.post(environment.base_url + 'auth/authenticate', this.loginFrom).pipe(map(data => data as AuthResponse));
  }

  refreshToken(): Observable<AuthResponse> {
    return this.http.post(environment.base_url + 'auth/refresh', this.loginFrom).pipe(map(data => data as AuthResponse));
  }

  createLoginForm(): void {
    this.loginFrom = {
      password: '',
      username: ''
    };
  }
}
