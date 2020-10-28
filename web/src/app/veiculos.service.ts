import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<object> {
    return this.http.get(`${this.apiUrl}/`);
  }

  registerVehicles(data: object) {
    return this.http.post(`${this.apiUrl}/`, data)
  }

  getById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  edit(id: string, data: object) {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  refresh(): void {
    window.location.reload();
  }
}
