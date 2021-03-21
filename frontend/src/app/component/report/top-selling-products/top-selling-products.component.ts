import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

import {ReportApiService} from '../../../service/api/report/report-api.service';
import {ReportFilterModel} from '../../../model/report-filter-model';
import {ToastrService} from 'ngx-toastr';
import {BarChartReport} from '../../../model/report/bar-chart-report';

@Component({
  selector: 'app-top-selling-products',
  templateUrl: './top-selling-products.component.html',
  styleUrls: ['./top-selling-products.component.css']
})
export class TopSellingProductsComponent implements OnInit {
  reportFilter: ReportFilterModel;
  topSellingProducts: BarChartReport;
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


  constructor(public reportApi: ReportApiService, private toastr: ToastrService) {
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
    this.reportApi.barCharReport('report/top-selling-product', this.country).subscribe(data => this.topSellingProducts = data,
      error => this.toastr.error(error.message));
  }
}
