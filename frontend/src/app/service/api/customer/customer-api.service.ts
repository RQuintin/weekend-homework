import {Injectable} from '@angular/core';
import {ApiService} from '../api-service';
import {CustomerModel} from '../../../model/customer-model';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerApiService extends ApiService<CustomerModel> {
  constructor(http: HttpClient, toastr: ToastrService, router: Router) {
    super(http, toastr, router, 'customer', new CustomerModel());
  }

  public create(): void {
    let request;
    // @ts-ignore
    if (this.form.id) {
      request = this.http.post(environment.base_url + this.path + '/update', this.form);
    } else {
      request = this.http.post(environment.base_url + 'auth/register', this.form);
    }
    request.subscribe((response => {
      // @ts-ignore
      if (response.success) {
        // @ts-ignore
        this.toastr.success(response.message);
        this.router.navigate([this.path]);
      } else {
        // @ts-ignore
        this.toastr.error(response.message);
      }
    }), error => {
      // console.log(error);
      this.toastr.error(error.message);
    });
  }

  newModel(): void {
    this.form = {
      id: 0,
      city: '',
      country: '',
      firstname: '',
      lastname: '',
      phone: ''
    };
  }
}
