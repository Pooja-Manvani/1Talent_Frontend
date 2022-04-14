import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leave-status-presentation',
  templateUrl: './leave-status-presentation.component.html',
})
export class LeaveStatusPresentationComponent {

  @ViewChild('pieChart')
  pieChart!: ElementRef;

  drawChart = () => {
    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Accepted', 8],
      ['Rejected', 2],
      ['Pending', 2],
      ['Req. Revoke', 0],
      ['Revoked', 0]
    ]);
  
    const options = {
      pieHole: 0.8,
      // legend: {position: 'top'},
    };
  
    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
  
    chart.draw(data, options);
  }
  
    ngOnInit() {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart);
    }
}
