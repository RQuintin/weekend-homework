import {Label} from 'ng2-charts';
import {ChartDataSets} from 'chart.js';

export class BarChartReport {
  barChartLabels: Label[];
  barChartData: ChartDataSets[];
  barChartLegend: boolean;
}
