import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlert(icon: SweetAlertIcon, title: string, text: string) {
    Swal.fire({
      title,
      text,
      icon
    });
  }

}
