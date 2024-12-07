import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../services/person.service';
@Component({
  selector: 'app-team-members-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterLink,
    MatProgressSpinnerModule,
  ],
  templateUrl: './team-members-table.component.html',
  styleUrl: './team-members-table.component.css',
})
export class TeamMembersTableComponent implements OnInit {
  teamMembers: string[] = [];
  isLoading: boolean = true;
  displayedColumns: string[] = ['name', 'actions'];

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
