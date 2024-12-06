import { Routes } from "@angular/router";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectSummaryComponent } from "./components/project-summary/project-summary.component";
import { PersonProjectListComponent } from "./components/person-project-list/person-project-list.component";

export const routes: Routes = [
  { path: "projects", component: ProjectListComponent },
  { path: "projects/:id", component: ProjectSummaryComponent },
  { path: "people/:name/projects", component: PersonProjectListComponent },
  { path: "", redirectTo: "/projects", pathMatch: "full" },
];
