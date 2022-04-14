import { Component} from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent {

  public chartType = ChartType.PieChart;

  public chartData = [
    ['Accepted', 8],
    ['Rejected', 5],
    ['Pending', 1],
    ['Req. Revoke', 0],
    ['Revoked', 0]
  ];

  public chartOptions = {
    pieHole: .6,
    legend: 'none',
    pieStartAngle: -95,
    'width':250,
    'height':200,
    chartArea: { width: '100%', height: '100%' },
    pieSliceTextStyle: { color: 'transparent' },
    colors: ['#408CFF', '#F26A6A', '#FFB800', '#f3b49f', '#f6c7b6'],
  };
}
