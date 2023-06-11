export class Task {
  id?: number;
  name?: string;
  description?: string;
  status?: string;
  dueDate?: Date;
  priority?: string;
  completed?: boolean; // Add this line if it's missing
}
