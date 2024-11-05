import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { activity } from '../../../interfaces/activity.interface';

@Component({
  selector: 'app-buy-ticket-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumberModule, ButtonModule],
  templateUrl: './buy-ticket-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyTicketDialogComponent {
  activity: activity = inject(DynamicDialogConfig).data;
  numberOfTicketsToBuy = signal<number>(0);

  amountToPay = computed(
    () => this.numberOfTicketsToBuy() * this.activity.precio
  );
}
