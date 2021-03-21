import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportComponent} from './report.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
