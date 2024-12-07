import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-project-summary',
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './project-summary.component.html',
  styleUrl: './project-summary.component.css',
})
export class ProjectSummaryComponent implements OnInit {
  project: any;
  isLoading: boolean = true;
  displayedColumns: string[] = ['taskName', 'assignedTo', 'estimatedHours'];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.params['id'];
    this.projectService.getProjectById(projectId).subscribe({
      next: (data) => {
        this.project = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching project');
        this.isLoading = false;
      },
    });
  }
}
