import { Routes } from '@angular/router';
import { TaskFormComponent } from './features/tasks/components/task-form/task-form.component';
import { TaskTableComponent } from './features/tasks/components/task-table/task-table.component';
import { TaskChartComponent } from './features/tasks/components/task-chart/task-chart.component';

export const routes: Routes = [
  { path: '', component: TaskFormComponent },
  { path: 'table', component: TaskTableComponent },
  { path: 'chart', component: TaskChartComponent },
];
