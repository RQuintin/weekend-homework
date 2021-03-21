import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../model/product-model';
import {ProductApiService} from '../../service/api/product/product-api.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {CustomerModel} from '../../model/customer-model';
import {CustomerApiService} from '../../service/api/customer/customer-api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  objectList: CustomerModel[];

  constructor(public apiService: CustomerApiService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.onLoadList();
  }

  onLoadList(): void {
    this.apiService.list().subscribe((list) => this.objectList = list, error => this.toastr.error(error.message));
  }

  onUpdate(object: CustomerModel): void {
    this.router.navigate(['customer/ae'], {state: {object}});
  }

}
