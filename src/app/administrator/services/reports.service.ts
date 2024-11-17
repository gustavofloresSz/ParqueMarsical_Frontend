import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  fullname = signal<string | null>(null);

  private apiUrl = environment.apiUrl; // Utiliza el apiUrl del environment

  constructor(private http: HttpClient) {}

  getEntradasVendidas(fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/compra_entradas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }

  getActividadesVendidas(fechaInicio: string, fechaFin: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/compra_actividades?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }

  //ganancias entrada reporte
  getGananciasEntrada(fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/income?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }
  //ganancias activiada reporte
  getGananciasActividad(fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/incomeActivities?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }

  getActividadMasVendida(fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bestActivity?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }
}
