import { Component } from '@angular/core';
import { TaskChartComponent } from './features/tasks/components/task-chart/task-chart.component';
import { TaskTableComponent } from './features/tasks/components/task-table/task-table.component';
import { TaskFormComponent } from './features/tasks/components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent,TaskTableComponent, TaskChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'companytask';
}
