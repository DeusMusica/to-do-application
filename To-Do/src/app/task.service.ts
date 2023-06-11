import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = []; // Placeholder tasks array
  taskAdded: Subject<Task> = new Subject<Task>(); // Add this line

  constructor() { }

  getAllTasks(): Task[] {
    // Return the tasks array
    return this.tasks;
  }

  addTask(task: Task): void {
    // Generate an ID for the task (you can use a unique identifier library)
    task.id = Date.now();

    // Add the task to the tasks array
    this.tasks.push(task);
    this.taskAdded.next(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  updateTask(task: Task): void {
    // Find the task with the matching ID in the tasks array
    const foundTask = this.tasks.find(t => t.id === task.id);

    if (foundTask) {
      // Update the task properties
      foundTask.name = task.name;
      foundTask.description = task.description;
      // Update other properties as needed
    }
  }

  deleteTask(task: Task): void {
    // Find the index of the task in the tasks array
    const index = this.tasks.findIndex(t => t.id === task.id);

    if (index !== -1) {
      // Remove the task from the tasks array
      this.tasks.splice(index, 1);
    }
  }
}
