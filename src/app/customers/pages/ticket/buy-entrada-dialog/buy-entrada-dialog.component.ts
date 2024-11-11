// src/app/components/buy-entrada-dialog/buy-entrada-dialog.component.ts
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CompraService } from '../../../services/compra.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-buy-entrada-dialog',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, InputNumberModule, DropdownModule],
  templateUrl: './buy-entrada-dialog.component.html',
})
export class BuyEntradaDialogComponent {
  private _cantitadEntradas = 1;
  ticketType: 'nino' | 'adulto';
  metodo_pago: any ='';
  cardNumber: string = '';
  expiryDate: string = '';
  mensaje_compra: boolean = false;
  paymentMethods = [
    { label: 'QR', value: 'Qr' },
    { label: 'Tarjeta', value: 'Tarjeta' }
  ];

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private compraService: CompraService,
    private authService: AuthService // Inyectar el servicio Auth
  ) {
    this.ticketType = this.config.data.ticketType;  // Obtienes el tipo de ticket (niño o adulto)
  }

  get cantidad_ticket(): number {
    return this._cantitadEntradas;
  }

  set cantidad_ticket(value: number) {
    this._cantitadEntradas = value;
  }

  // Método para confirmar la compra
  confirmar_compra() {
    if (!this.metodo_pago) {
      console.error('Debe seleccionar un método de pago');
      return;
    }
  
    // Prepara los datos para enviar al backend
    const compraData = {
      metodo_pago: this.metodo_pago.value,  
      cliente_id: 1, // Asegúrate de obtener el cliente_id de la sesión
      cantidad: this.cantidad_ticket, 
    };
  
    this.compraService.compra(compraData).subscribe(
      (response: any) => {
        console.log('Compra registrada exitosamente:', response);
        this.ref.close();
      },
      (error: any) => {
        console.error('Error al registrar la compra', error);
      }
    );
    this.mensaje_compra = true;
    setTimeout(() => {
      this.mensaje_compra = false;
    }, 4000);
  }
}
