import { ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule, InputNumberModule, ButtonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // Variables para el número de tickets de niños y adultos
  numberOfChildTickets = signal<number>(0);
  numberOfAdultTickets = signal<number>(0);

  // Calcular el total considerando los precios de niños (3.5) y adultos (5)
  amountToPay = computed(() => {
    return this.numberOfChildTickets() * 3.50 + this.numberOfAdultTickets() * 5.00;
  });
}
