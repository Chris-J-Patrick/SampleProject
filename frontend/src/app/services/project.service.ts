import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private API_URL = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  getProjectById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}
