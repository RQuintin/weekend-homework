import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DashboardNavbarComponent} from './component/common/dashboard-navbar/dashboard-navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ProductComponent} from './component/product/product.component';
import {ProductFormComponent} from './component/product/product-form/product-form.component';
import {ReportComponent} from './component/report/report.component';
import {ChartsModule} from 'ng2-charts';
import {TopSellingProductsComponent} from './component/report/top-selling-products/top-selling-products.component';
import {SalesByMonthComponent} from './component/report/sales-by-month/sales-by-month.component';
import {LoginComponent} from './component/login/login.component';
import {TokenInterceptor} from './interceptor/token.interceptor';
import {CustomerComponent} from './component/customer/customer.component';
import {CustomerFormComponent} from './component/customer/customer-form/customer-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardNavbarComponent,
    ProductComponent,
    ProductFormComponent,
    ReportComponent,
    TopSellingProductsComponent,
    SalesByMonthComponent,
    LoginComponent,
    CustomerComponent,
    CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, HttpClient],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
