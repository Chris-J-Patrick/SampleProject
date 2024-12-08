export interface Project {
  project_name: string;
  members: Person[];
  total_hours: number;
  tasks: Task[];
}

export interface Task {
  task_name: string;
  assigned_to: string;
  estimated_hours: string;
}

export interface Person {
  name: string;
  projects?: Project[];
}

export interface TableColumn<T = any> {
  field: string;
  header: string;
  valueAccessor?: (row: T) => string;
}

export interface ProjectDetails {
  project_name: string;
  total_hours: number;
  members: Person[];
  tasks: Task[];
}
