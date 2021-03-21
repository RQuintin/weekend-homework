import {Component, OnInit} from '@angular/core';
import {AuthApiService} from '../../service/api/auth-api.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {TokenStorageServiceService} from '../../service/token/token-storage-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public  authApiService: AuthApiService, private toastr: ToastrService,
              private tokenStorage: TokenStorageServiceService, private route: Router) {
  }

  ngOnInit(): void {
    this.authApiService.createLoginForm();
  }

  onSubmit(form: NgForm): void {

    this.authApiService.login().subscribe((response => {
      
      if (response.success) {
        this.tokenStorage.save(response.data);
	      this.route.navigate(['/home']);
      } else {
        this.toastr.error(response.message);
      }

    }));

  }
}
