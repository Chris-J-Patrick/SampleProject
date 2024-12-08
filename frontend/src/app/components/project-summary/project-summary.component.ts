import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from '../table/table.component';
import { Project, TableColumn, Task } from '../../interfaces/interfaces';
@Component({
  selector: 'app-project-summary',
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterLink,
    TableComponent,
  ],
  templateUrl: './project-summary.component.html',
  styleUrl: './project-summary.component.css',
})
export class ProjectSummaryComponent implements OnInit {
  project: Project | null = null;
  isLoading: boolean = true;
  displayedColumns: TableColumn<Task>[] = [
    { field: 'task_name', header: 'Task' },
    { field: 'assigned_to', header: 'Assigned to' },
    { field: 'estimated_hours', header: 'Estimated Hours' },
  ];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.params['id'];
    this.projectService.getProjectById(projectId).subscribe({
      next: (data) => {
        this.project = { ...data, tasks: data.tasks ?? [] };
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching project');
        this.isLoading = false;
      },
    });
  }
  get memberNames(): string {
    return this.project?.members?.map((member) => member.name).join(', ') || '';
  }
}
