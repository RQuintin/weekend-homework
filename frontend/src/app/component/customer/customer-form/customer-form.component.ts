import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {CustomerApiService} from '../../../service/api/customer/customer-api.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(public apiService: CustomerApiService, public router: Router) {
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
