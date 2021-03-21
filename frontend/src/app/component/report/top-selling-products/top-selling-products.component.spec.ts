import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopSellingProductsComponent} from './top-selling-products.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TopSellingProductsComponent', () => {
  let component: TopSellingProductsComponent;
  let fixture: ComponentFixture<TopSellingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSellingProductsComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('chart is render bar', () => {
    expect(component.barChartType).toEqual('bar');
  });
  it('should is render report chart responsive ', () => {
    expect(component.barChartOptions.responsive).toEqual(true);
  });
  it('should is render report chart plugins datalabels anchor end', () => {
    expect(component.barChartOptions.plugins.datalabels.anchor).toEqual('end');
  });
  it('should is render report chart plugins datalabels align end', () => {
    expect(component.barChartOptions.plugins.datalabels.align).toEqual('end');
  });

});
