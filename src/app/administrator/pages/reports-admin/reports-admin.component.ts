import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../../customers/services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';

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
    MessagesModule
  ],
  templateUrl: './reports-admin.component.html',
  styleUrl: './reports-admin.component.css'
})
export class ReportsAdminComponent {
  fecha: string = ''; // Variable para la fecha que el usuario ingrese
  clientes: any[] = []; // Arreglo para almacenar los clientes obtenidos

  constructor(private userService: UserService,private cdr: ChangeDetectorRef) {}

  buscarClientesPorFecha() {
    if (this.fecha) {
      this.userService.getClientesByFecha(this.fecha).subscribe(
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
