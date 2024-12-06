import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private API_URL = "http://localhost:8000/api/people";

  constructor(private http: HttpClient) {}

  getProjectsByPersonName(name: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${name}/projects`);
  }
}
