import { Routes } from '@angular/router';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { PersonProjectListComponent } from './components/person-project-list/person-project-list.component';

export const routes: Routes = [
  { path: 'projects', component: AllProjectsComponent },
  { path: 'projects/:id', component: ProjectSummaryComponent },
  { path: 'people/:name/projects', component: PersonProjectListComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
];
