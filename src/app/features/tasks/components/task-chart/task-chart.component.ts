import { Component, inject } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { TaskStore } from '../../store/task.store';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-task-chart',
  
    imports: [CommonModule,NgChartsModule],
  templateUrl: './task-chart.component.html',
  styleUrl: './task-chart.component.css'
})
export class TaskChartComponent {
isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(this.platformId);
}

   private store = inject(TaskStore);
  statusDist = this.store.statusDistribution;

  get chartData(): ChartConfiguration<'pie'>['data'] {
    const dist = this.statusDist();
    return {
      labels: ['Todo', 'In Progress', 'Done'],
      datasets: [{ data: [dist.todo, dist['in-progress'], dist.done], backgroundColor: ['#f39c12', '#3498db', '#2ecc71'] }]
    };
  }
  
}
