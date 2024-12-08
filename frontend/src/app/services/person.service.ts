import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private API_URL = `${environment.apiUrl}/people`;

  constructor(private http: HttpClient) {}

  getAllTeamMembers(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/team-members`);
  }

  getProjectsByPersonName(name: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${name}/projects`);
  }
}
