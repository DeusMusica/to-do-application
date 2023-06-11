import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = new Task();

  @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private taskService: TaskService) { }

  onSubmit() {
    this.taskService.addTask(this.task);
    this.task = new Task(); // Reset the task object
  }
}
