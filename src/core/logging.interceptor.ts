import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { AuthService, AlertService } from '../app/customers/services';

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);
  const alertService = inject(AlertService);
  const router = inject(Router);

  const reqWithHeader = req.clone({
    headers: req.headers.append(
      'Authorization',
      `Bearer ${localStorage.getItem('token') || ''}`
    ),
  });

  // appearanceService.showLoading();
  return next(reqWithHeader).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          authService.logout();
          router.navigate(['/login']);
        }
        hendleHttpErrors(error, alertService);
      }
      return throwError(() => Error);
    }),
    finalize(() => {
      // appearanceService.hideLoading();
    })
  );
}

const hendleHttpErrors = (error: HttpErrorResponse, service: AlertService) => {
  const message: string = error.error['message'] ?? 'Solicitud incorrecta';
  switch (error.status) {
    case 500:
      service.showAlert(
        'error',
        'Error en el servidor',
        'Se ha producido un error en el servidor'
      );
      break;
    case 400:
      service.showAlert('warning', 'Solicitud incorrecta', error.error.message);

      break;
    case 403:
      service.showAlert('info', 'Acceso denegado', 'Recurso protegido');

      break;
    case 404:
      service.showAlert('info', 'Recurso no encontrado', 'Erro');
      break;
    default:
      break;
  }
};
