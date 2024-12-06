import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';

import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../services';
import { activity } from '../../interfaces/activity.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { BuyTicketDialogComponent } from './buy-ticket-dialog/buy-ticket-dialog.component';
import { CompraService } from '../../services/compra.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, DataViewModule, ButtonModule],
  templateUrl: './activities.component.html',
  styleUrls:['./activities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class ActivitiesComponent implements OnInit {
  activities = signal<activity[]>([]);
  constructor(
    private userService: UserService,
    private dialogService: DialogService,
    private compraService: CompraService
  ) {}
  mensaje_compra: boolean = false;

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.userService.getActivities().subscribe((resp) => {
      this.activities.set(resp);
    });
  }

  view(activity: activity) {
    const ref = this.dialogService.open(BuyTicketDialogComponent, {
      header: 'Comprar boleto',
      width: '40rem',
      data: activity,
    });
  }
  realizarCompra() {
    this.compraService.registrarCompraActividad().subscribe(
      (response) => {
        console.log('Compra realizada con éxito', response);
        this.compraService.limpiarCarrito();
      },
      (error) => {
        console.error('Error al realizar la compra', error);
      }
    );
    this.mensaje_compra = true;
    setTimeout(() => {
      this.mensaje_compra = false;
    }, 4000);
  }
  trackByIndex(index: number, item: any): number {
    return index;  // Usamos el índice para identificar de forma única los elementos
  }
}
