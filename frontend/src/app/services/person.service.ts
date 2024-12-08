import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Person } from '../interfaces/interfaces';
import { Project } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private API_URL = `${environment.apiUrl}/people`;

  constructor(private http: HttpClient) {}

  getAllTeamMembers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.API_URL}/team-members`);
  }

  getProjectsByPersonName(name: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.API_URL}/${name}/projects`);
  }
}
