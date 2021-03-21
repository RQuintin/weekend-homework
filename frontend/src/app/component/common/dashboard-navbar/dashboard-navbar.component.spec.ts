import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardNavbarComponent} from './dashboard-navbar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';

describe('DashboardNavbarComponent', () => {
  let component: DashboardNavbarComponent;
  let fixture: ComponentFixture<DashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNavbarComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
