import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  private addTaskSubscription?: Subscription; // Add this line

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.addTaskSubscription = this.taskService.taskAdded.subscribe((task: Task) => {
      if (!this.tasks.find(t => t.id === task.id)) {
        this.tasks.push(task);
      }
    });
  }

  ngOnDestroy() {
    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe();
    }
  }


  addTask(task: Task) {
    this.taskService.addTask(task);
  }

  fetchTasks() {
    this.tasks = this.taskService.getAllTasks();
  }

  handleAddTask(task: Task) {
    this.taskService.addTask(task);
    this.fetchTasks();
  }

  handleEditTask(task: Task) {
    this.taskService.updateTask(task);
    this.fetchTasks();
  }

  handleDeleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.fetchTasks();
  }
}
