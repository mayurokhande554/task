
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskStore } from '../../store/task.store';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
private fb = inject(FormBuilder);
private store = inject(TaskStore);

  @Input() editTask: Task | null = null;

  form: FormGroup = this.fb.group({
    id: [null],
    title: ['', Validators.required],
    status: ['todo', Validators.required],
  });

  constructor(){}

  ngOnInit() {
    if (this.editTask) {
      this.form.patchValue(this.editTask);
    }
  }

  submit() {
    const formValue = { ...this.form.value, createdAt: new Date() };
    this.editTask ? this.store.update(formValue) : this.store.add({ ...formValue, id: Date.now() });
    this.form.reset({ status: 'todo' });
  }
}
