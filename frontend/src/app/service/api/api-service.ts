import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export abstract class ApiService<T> {

  protected constructor(protected http: HttpClient, protected toastr: ToastrService, protected router: Router,
                        public path: string, public form: T) {
                    }

  // public create(): void {
  //   let request;
  //   // @ts-ignore
  //   if (this.form.id) {
  //     request = this.http.post(environment.base_url + this.path + '/update', this.form);
  //   } else {
  //     request = this.http.post(environment.base_url + this.path + '/create', this.form);
  //   }
  //   request.subscribe((response => {
  //     // @ts-ignore
  //     if (response.success) {
  //       // @ts-ignore
  //       this.toastr.success(response.message);
  //       this.router.navigate([this.path]);
  //     } else {
  //       // @ts-ignore
  //       this.toastr.error(response.message);
  //     }
  //   }), error => {
  //     console.log(error);
  //     this.toastr.error(error.message);
  //   });
  // }

  public list(): Observable<T[]> {
    return this.http.get(environment.base_url + this.path + '/list').pipe(map(response => {
      // @ts-ignore
      if (response.success) {
        // @ts-ignore
        return response.data;
      } else {
        // @ts-ignore
        this.toastr.error(response.message);
        return [];
      }
    }));
  }

  // public delete(id: number): void {
  //   this.http.get(environment.base_url + this.path + '/delete/' + id).subscribe((response => {
  //     // @ts-ignore
  //     if (response.success) {
  //       // @ts-ignore
  //       this.toastr.success(response.message);
  //     } else {
  //       // @ts-ignore
  //       this.toastr.error(response.message);
  //     }
  //   }), error => {
  //     console.log(error);
  //     this.toastr.error(error.message);
  //   });
  // }

  abstract newModel(): void;
}
