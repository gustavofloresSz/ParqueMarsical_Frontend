import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { activity } from '../interfaces/activity.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  private readonly base_url = environment.apiUrl;
  private compraActividadTemp: any[] = []; 

  constructor(private http: HttpClient) {}

  //compra entrada parque
  compra(compraData: any): Observable<any> {
    return this.http.post(`${this.base_url}/compra`, compraData); // Asegúrate de que el backend reciba estos datos
  }

  //compra actividad
  agregarActividadACarrito(compraActividadData: any) {
    if (!this.compraActividadTemp.some(item => item.actividadId === compraActividadData.actividadId)) {
      this.compraActividadTemp.push(compraActividadData);
    }
  }
  quitarActividadDelCarrito(actividadId: number) {
    this.compraActividadTemp = this.compraActividadTemp.filter(item => item.actividadId !== actividadId);
  }
  obtenerActividadesDelCarrito() {
    return this.compraActividadTemp;
  }
  registrarCompraActividad(): Observable<any> {
    return this.http.post(`${this.base_url}/compraActividad`, this.compraActividadTemp);
  }
  limpiarCarrito() {
    this.compraActividadTemp = [];
  }
}
