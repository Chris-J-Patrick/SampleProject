import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PersonService } from "../../services/person.service";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-person-project-list",
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: "./person-project-list.component.html",
  styleUrl: "./person-project-list.component.css",
})
export class PersonProjectListComponent implements OnInit {
  personName: string = "";
  projects: any[] = [];
  isLoading: boolean = true;
  displayedColumns: string[] = ["projectName", "members", "hours", "actions"];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personName = this.route.snapshot.params["name"];

    this.personService.getProjectsByPersonName(this.personName).subscribe({
      next: (data) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error Fetching Projects for person:", this.personName);
      },
    });
  }
}
