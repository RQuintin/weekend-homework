import {Injectable} from '@angular/core';
import {ApiService} from '../api-service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ProductModel} from '../../../model/product-model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends ApiService<ProductModel> {

  constructor(http: HttpClient, toastr: ToastrService, router: Router) {
    super(http, toastr, router, 'product', new ProductModel());
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
      name: '',
      unitPrice: 0.0,
      package_: '',
      isdiscontinued: false,
    };
  }
}
