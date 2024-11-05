import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BehaviorSubject, map, tap } from 'rxjs';
import { activity } from '../interfaces/activity.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  fullname = signal<string | null>(null);

  private apiUrl = environment.apiUrl; // Utiliza el apiUrl del environment

  constructor(private http: HttpClient) {}

  get_usuarios() {
    return this.http.get(`${this.apiUrl}/clientes`);
  }
  add_usuarios(usuario: any) {
    return this.http.post(`${this.apiUrl}/clientes`, usuario);
  }

  login(form: Object) {
    return this.http
      .post<{ token: string; fullname: string }>(`${this.apiUrl}/login`, form)
      .pipe(
        tap(({ token, fullname }) => this._setAuthentication(token, fullname))
      );
  }
  logout() {
    this.fullname.set(null);
    localStorage.removeItem('token');
  }

  register(form: Object) {
    return this.http
      .post<{ token: string; fullname: string }>(
        `${this.apiUrl}/register`,
        form
      )
      .pipe(
        tap(({ token, fullname }) => this._setAuthentication(token, fullname))
      );
  }

  checkAuthStatus() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
    }
    return this.http
      .get<{
        fullname: string;
      }>(`${this.apiUrl}/auth`)
      .pipe(
        tap(({ fullname }) => {
          this.fullname.set(fullname);
          return true;
        })
      );
  }

  getActivities() {
    return this.http
      .get<activity[]>(`${this.apiUrl}/activities`)
      .pipe(
        map((resp) =>
          resp.map(({ imagen, ...props }) => ({
            ...props,
            imagen: `assets/img/activities/${imagen}`,
          }))
        )
      );
  }

  private _setAuthentication(token: string, fullname: string) {
    this.fullname.set(fullname);
    localStorage.setItem('token', token);
  }
}
