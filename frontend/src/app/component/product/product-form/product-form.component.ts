import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductApiService} from '../../../service/api/product/product-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(public apiService: ProductApiService, public router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.apiService.form = this.router.getCurrentNavigation().extras.state.object;
    } else {
      this.apiService.newModel();
    }
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.apiService.create();
  }
}
