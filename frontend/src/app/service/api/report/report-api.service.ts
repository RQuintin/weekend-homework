import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReportFilterModel} from '../../../model/report-filter-model';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {BarChartReport} from '../../../model/report/bar-chart-report';


@Injectable({
  providedIn: 'root'
})
export class ReportApiService {

  constructor(private http: HttpClient) {
  }

  public filters(): Observable<ReportFilterModel> {
    return this.http.get(environment.base_url + 'report/filter').pipe(map(response => {

      // @ts-ignore
      if (response.success) {
        // @ts-ignore
        return response.data;
      } else {
        // @ts-ignore
        this.toastr.error(response.message);
        return new ReportFilterModel();
      }
    }));
  }

  public barCharReport(path: string, country: string): Observable<BarChartReport> {
    return this.http.get(environment.base_url + path + '?country=' + country ).pipe(map(response => {

      // @ts-ignore
      if (response.success) {
        // @ts-ignore
        return response.data;
      } else {
        // @ts-ignore
        this.toastr.error(response.message);
        return new BarChartReport();
      }
    }));
  }

}
