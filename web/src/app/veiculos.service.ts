import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  /**
   * Busca na API todos os veículos
   */
  getAllVehicles(): Observable<object> {
    return this.http.get(`${this.apiUrl}/`);
  }

  /**
   * Insere veículo no DB
   * @param data
   */
  registerVehicles(data: object) {
    console.log(data);
    return this.http.post(`${this.apiUrl}/`, data)
  }

  /**
   * Busca os dados do veículo a partir de um ID
   * @param id
   */
  getById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  /**
   * Edita um veículo no DB a partir do id e dos dados passados
   * @param id
   * @param data
   */
  edit(id: string, data: object) {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }

  /**
   * Deleta um veículo a partir de um ID passado
   * @param id
   */
  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /**
   * Recarrega a página
   */
  refresh(): void {
    window.location.reload();
  }
}
