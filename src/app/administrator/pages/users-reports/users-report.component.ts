import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../../customers/services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-reports-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    FloatLabelModule
  ],
  templateUrl: './users-report.component.html',
  styleUrl: './users-report.component.css'
})
export class ReportsAdminComponent {
  fechaInicio: string = '';
  fechaFin: string = '';
  clientes: any[] = [];

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  buscarClientesPorFecha() {
    if (this.fechaInicio && this.fechaFin) {
      console.log('Fecha Inicio:', this.fechaInicio, 'Fecha Fin:', this.fechaFin);
      this.userService.getClientesByFecha(this.fechaInicio, this.fechaFin).subscribe(
        (data) => {
          this.clientes = data;
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error al obtener los clientes:', error);
        }
      );
    }
  }  
}
