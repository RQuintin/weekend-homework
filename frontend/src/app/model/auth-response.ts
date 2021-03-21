export class AuthResponse {
  data: JwtModel;
  message: string;
  success: boolean;
  error: string;

}


export class JwtModel {
  jwt: string;
  refresh: string;
}
