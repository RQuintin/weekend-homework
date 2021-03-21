import {Component, OnInit} from '@angular/core';
import {ProductApiService} from '../../service/api/product/product-api.service';
import {ProductModel} from '../../model/product-model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  objectList: ProductModel[];

  constructor(public apiService: ProductApiService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.onLoadList();
  }

  onLoadList(): void {
    this.apiService.list().subscribe((list) => this.objectList = list, error => this.toastr.error(error.message));
  }

  onUpdate(object: ProductModel): void {
    this.router.navigate(['product/ae'], {state: {object}});
  }
}
