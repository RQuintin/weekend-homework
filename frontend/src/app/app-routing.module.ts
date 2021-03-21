import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductComponent} from './component/product/product.component';
import {ProductFormComponent} from './component/product/product-form/product-form.component';
import {ReportComponent} from './component/report/report.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './guard/auth-guard.service';
import {AdminRoleGuard} from './guard/admin-role-guard.service';
import {CustomerComponent} from './component/customer/customer.component';
import {CustomerFormComponent} from './component/customer/customer-form/customer-form.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'product', component: ProductComponent, canActivate: [AuthGuard, AdminRoleGuard]},
  {path: 'product/ae', component: ProductFormComponent, canActivate: [AuthGuard, AdminRoleGuard] },
  {path: 'home', component: ReportComponent, canActivate: [AuthGuard]},
  {path: 'report', component: ReportComponent, canActivate: [AuthGuard]},
  {path: 'customer', component: CustomerComponent, canActivate: [AuthGuard, AdminRoleGuard]},
  {path: 'customer/ae', component: CustomerFormComponent, canActivate: [AuthGuard, AdminRoleGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
