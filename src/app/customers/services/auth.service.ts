import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<any | null>(null);
  user = this._user.asObservable();

  private readonly base_url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(form: Object) {
    return this.http
      .post<{ token: string; fullname: string }>(`${this.base_url}/auth`, form)
      .pipe(
        map(({ token, fullname }) => this._setAuthentication(token, fullname))
      );
  }

  logout() {
    localStorage.removeItem('token');
    this._user.next(null);
  }

  checkAuthStatus() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }
    return this.http
      .get<{
        fullname: string;
      }>(`${this.base_url}/auth`)
      .pipe(
        map(({ fullname }) => {
          console.log(fullname);
          this._user.next({ fullname });
          return true;
        })
      );
  }

  private _setAuthentication(token: string, fullname: string): boolean {
    this._user.next({ fullname });
    localStorage.setItem('token', token);
    return true;
  }
}
