import { Injectable, computed, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskStore {
  private _tasks = signal<Task[]>([]);

  readonly tasks = computed(() => this._tasks());

  readonly statusDistribution = computed(() => {
    const dist = { todo: 0, 'in-progress': 0, done: 0 };
    this._tasks().forEach(t => dist[t.status]++);
    return dist;
  });

  add(task: Task) {
    this._tasks.set([...this._tasks(), task]);
  }

  update(updated: Task) {
    this._tasks.set(this._tasks().map(t => t.id === updated.id ? updated : t));
  }

  delete(id: number) {
    this._tasks.set(this._tasks().filter(t => t.id !== id));
  }
}
