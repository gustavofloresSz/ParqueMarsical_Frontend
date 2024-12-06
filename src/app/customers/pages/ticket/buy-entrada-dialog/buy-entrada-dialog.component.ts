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
  mensaje_compra: boolean = false;
  esta_logueado: boolean =false;
  metodoDePago = [
    { label: 'QR', value: 'Qr' },
    { label: 'Tarjeta', value: 'Tarjeta' }
  ];

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private compraService: CompraService,
    private authService: AuthService
  ) {
    this.ticketType = this.config.data.ticketType; // Obtienes el tipo de ticket (niño o adulto)
    this.esta_logueado = this.authService.isLoggedIn();
  }

  get cantidad_ticket(): number {
    return this._cantitadEntradas;
  }

  set cantidad_ticket(value: number) {
    this._cantitadEntradas = value;
  }

  confirmar_compra() {
    if (!this.metodo_pago) {
      console.error('Debe seleccionar un método de pago');
      return;
    }

    const entradaId = this.ticketType === 'nino' ? 1 : 2; // 1 para niño, 2 para adulto
    const cliente_id = this.authService.getLoggedInUserId();
    const compraData = {
      metodo_pago: this.metodo_pago.value,
      cliente_id: cliente_id,
      cantidad: this.cantidad_ticket,
      entradaId: entradaId
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