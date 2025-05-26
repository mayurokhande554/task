import { Component, inject, signal  } from '@angular/core';
import { TaskStore } from '../../store/task.store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.css'
})
export class TaskTableComponent {
  private store = inject(TaskStore);


  tasks = this.store.tasks; 
  selectedTask = signal<Task | null>(null);

 edit(task: Task) {
    this.selectedTask.set(task);
  }

  
  delete(id: number) {
    this.store.delete(id);

   
    if (this.selectedTask()?.id === id) {
      this.selectedTask.set(null);
    }
  }
}
