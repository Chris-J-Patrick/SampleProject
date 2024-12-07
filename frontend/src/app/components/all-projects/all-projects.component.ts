import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TeamMembersTableComponent } from '../team-members-table/team-members-table.component';
@Component({
  selector: 'app-all-projects',
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterLink,
    TeamMembersTableComponent,
  ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css',
})
export class AllProjectsComponent implements OnInit {
  projects: any[] = [];
  isLoading: boolean = true;
  displayedColumns: string[] = ['name', 'members', 'hours', 'actions'];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching projects', err);
        this.isLoading = false;
      },
    });
  }
}
