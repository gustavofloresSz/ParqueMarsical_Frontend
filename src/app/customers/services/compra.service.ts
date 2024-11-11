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

  constructor(private http: HttpClient) {}

  compra(compraData: any): Observable<any> {
    return this.http.post(`${this.base_url}/compra`, compraData); // Asegúrate de que el backend reciba estos datos
  }
}
