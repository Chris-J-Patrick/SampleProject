import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { TableComponent } from '../table/table.component';
import { Person, TableColumn } from '../../interfaces/interfaces';
@Component({
  selector: 'app-team-members-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterLink,
    MatProgressSpinnerModule,
    TableComponent,
  ],
  templateUrl: './team-members-table.component.html',
  styleUrl: './team-members-table.component.css',
})
export class TeamMembersTableComponent implements OnInit {
  teamMembers: Person[] = [];
  isLoading: boolean = true;
  displayedColumns: TableColumn<Person>[] = [
    { field: 'name', header: 'Name' },
    { field: 'actions', header: 'Actions' },
  ];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getAllTeamMembers().subscribe({
      next: (data) => {
        this.teamMembers = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching all team members');
        this.isLoading = false;
      },
    });
  }
}
