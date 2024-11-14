import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { activity } from '../../../interfaces/activity.interface';
import { DropdownModule } from 'primeng/dropdown';
import { CompraService } from '../../../services/compra.service';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-buy-ticket-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumberModule, ButtonModule,DropdownModule],
  templateUrl: './buy-ticket-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyTicketDialogComponent {
  activity: activity = inject(DynamicDialogConfig).data;
  numberOfTicketsToBuy = 1;
  metodo_pago: any ='';
  metodoDePago = [
    { label: 'QR', value: 'QR' },
    { label: 'Tarjeta', value: 'Tarjeta' },
  ];
  isInCart: boolean = false;
  esta_logueado: boolean =false;

  constructor(
    public ref: DynamicDialogRef,
    private compraService: CompraService,
    private authService: AuthService
  ) {
    this.esta_logueado = this.authService.isLoggedIn();
  }
  get cantidad_ticket(): number {
    return this.numberOfTicketsToBuy;
  }

  set cantidad_ticket(value: number) {
    this.numberOfTicketsToBuy = value;
  }

  amountToPay() {
    return this.numberOfTicketsToBuy * this.activity.precio;
  }
  agregarAlCarrito() {
    if (!this.metodo_pago) {
      console.error('Debe seleccionar un método de pago');
      return;
    }
    const cliente_id = this.authService.getLoggedInUserId();
    const compraActividadData = {
      cantidad: this.numberOfTicketsToBuy,
      cliente_id: cliente_id,
      metodo_pago: this.metodo_pago.value,
      actividadId: this.activity.id,
    };
  
    if (this.isInCart) {
      this.compraService.quitarActividadDelCarrito(this.activity.id);
      this.isInCart = false;
    } else {
      this.compraService.agregarActividadACarrito(compraActividadData);
      this.isInCart = true;
    }
  }
}