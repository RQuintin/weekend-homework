import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SalesByMonthComponent} from './sales-by-month.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';

describe('SalesByMonthComponent', () => {
  let component: SalesByMonthComponent;
  let fixture: ComponentFixture<SalesByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByMonthComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
