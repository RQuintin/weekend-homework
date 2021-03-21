import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerComponent} from './customer.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
