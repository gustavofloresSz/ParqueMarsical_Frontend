import { ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BuyEntradaDialogComponent } from './buy-entrada-dialog/buy-entrada-dialog.component';
import { UserService } from '../../services';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule, ButtonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  abrir_dialog(ticketType: 'nino' | 'adulto') {
    this.ref = this.dialogService.open(BuyEntradaDialogComponent, {
      header: 'Seleccionar Método de Pago',
      width: '40rem',
      data: {
        ticketType: ticketType  // El tipo de ticket (niño o adulto)
      },
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}