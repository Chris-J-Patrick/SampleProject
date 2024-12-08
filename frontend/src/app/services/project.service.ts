import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private API_URL = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.API_URL}`);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.API_URL}/${id}`);
  }
}
