import {Injectable} from '@angular/core';
import {JwtModel} from '../../model/auth-response';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  constructor() {
  }

  public clear(): void {
    sessionStorage.clear();
  }

  public save(jwt: JwtModel): void {
    sessionStorage.setItem('token', jwt.jwt);
    sessionStorage.setItem('refresh', jwt.refresh);
  }

  public getRole(): string {
    const token = this.tokenOnly();
    // @ts-ignore
    return token ? this.tokenData().role : null;

  }

  public tokenData(): any {
    const token = this.tokenOnly();
    return token ? jwt_decode(token) : null;
  }

  public tokenOnly(): string {
    const token = this.token();
    return token ? token.replace('Bearer ', '') : null;
  }

  public token(): string {
    const token = sessionStorage.getItem('token');
    return token ? token : null;
  }

}
