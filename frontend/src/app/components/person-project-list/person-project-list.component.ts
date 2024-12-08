import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { Project, TableColumn } from '../../interfaces/interfaces';
@Component({
  selector: 'app-person-project-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterLink,
    TableComponent,
  ],
  templateUrl: './person-project-list.component.html',
  styleUrl: './person-project-list.component.css',
})
export class PersonProjectListComponent implements OnInit {
  personName: string = '';
  projects: Project[] = [];
  isLoading: boolean = true;
  displayedColumns: TableColumn<Project>[] = [
    { field: 'project_name', header: 'Project' },
    {
      field: 'members',
      header: 'Members',
      valueAccessor: (row: Project) =>
        row.members.map((member) => member.name).join(', '),
    },
    { field: 'estimated_hours', header: 'Estimated Hours' },
    { field: 'actions', header: 'Actions' },
  ];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personName = this.route.snapshot.params['name'];

    this.personService.getProjectsByPersonName(this.personName).subscribe({
      next: (data) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error Fetching Projects for person:', this.personName);
      },
    });
  }
  formatMembers(members: string[]): string {
    return members.join(' ');
  }
}
