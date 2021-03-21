import {Component, OnInit} from '@angular/core';
import {ReportApiService} from '../../../service/api/report/report-api.service';
import {ToastrService} from 'ngx-toastr';
import {ReportFilterModel} from '../../../model/report-filter-model';
import {ChartOptions, ChartType} from 'chart.js';
import {BarChartReport} from '../../../model/report/bar-chart-report';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css']
})
export class SalesByMonthComponent implements OnInit {
  reportFilter: ReportFilterModel;
  salesByMonth: BarChartReport;
  country: string;
  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}], yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  constructor(private reportApi: ReportApiService, private toastr: ToastrService) {
    this.reportApi.filters().subscribe(data => {
      this.reportFilter = data;
      this.country = 'ALL';
      this.loadData();
  }, error => this.toastr.error(error.message));
  }

  ngOnInit(): void {
  }

  customerCountry(): void {
    this.loadData();
  }

  private loadData(): void {
    this.reportApi.barCharReport('report/sales-by-month', this.country).subscribe(data => this.salesByMonth = data,
      error => this.toastr.error(error.message));
  }
}
