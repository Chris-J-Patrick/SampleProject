import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private API_URL = "http://localhost:8000/api/projects";

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  getProjectById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}
