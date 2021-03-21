import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageServiceService} from '../service/token/token-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageServiceService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.tokenStorage.getRole() === 'admin') {
      return true;
    }

    if (this.tokenStorage.token()) {
      this.router.navigate(['/home']);
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }

  }
}
