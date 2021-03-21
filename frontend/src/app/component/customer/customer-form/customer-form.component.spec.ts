import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerFormComponent} from './customer-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {Router, RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {CustomerModel} from '../../../model/customer-model';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFormComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), RouterTestingModule, FormsModule],
      providers: [{provide: Router, useClass: RouterStub}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have api form id to equal undefined', () => {
    expect(component.apiService.form.id).toEqual(undefined);
  });
  it('should have api form call new model method id to equal 0', () => {
    component.apiService.newModel();
    expect(component.apiService.form.id).toEqual(0);
  });

  it('should render save button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-header .btn-outline-success').textContent).toContain('Save');
  });
  it('should render cancel button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-header .btn-outline-danger').textContent).toContain('Cancel');
  });
});

class RouterStub {
  // tslint:disable-next-line:typedef
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          object: new CustomerModel()
        }
      }
    };
  }
}
