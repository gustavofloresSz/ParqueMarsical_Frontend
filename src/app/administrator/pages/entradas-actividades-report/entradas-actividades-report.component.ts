import { ChangeDetectorRef, Component } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-entradas-report',
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
  templateUrl: './entradas-actividades-report.component.html',
  styleUrl: './entradas-actividades-report.component.css'
})
export class EntradasReportComponent {
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  actividadesVendidas: any[] = [];
  entradasVendidas: any[] = [];

  constructor(private reportsService: ReportsService, private cdr: ChangeDetectorRef) {}

  generarReporteEntradas() {
    this.actividadesVendidas = [];
    if (this.fechaInicio && this.fechaFin) {
        const fechaInicioStr = this.fechaInicio.toISOString().split('T')[0];
        const fechaFinStr = this.fechaFin.toISOString().split('T')[0];

        this.reportsService.getEntradasVendidas(fechaInicioStr, fechaFinStr).subscribe(
            (data) => {
                this.entradasVendidas = data; // Almacena los datos recibidos
                this.cdr.detectChanges();
            },
            (error) => {
                console.error('Error al generar el reporte:', error);
                this.entradasVendidas = [];
            }
        );
    }
}

  generarReporteActividades() {
    this.entradasVendidas = []; //limpiar la otra compra
    if (this.fechaInicio && this.fechaFin) {
        const fechaInicioStr = this.fechaInicio.toISOString().split('T')[0];
        const fechaFinStr = this.fechaFin.toISOString().split('T')[0];

        this.reportsService.getActividadesVendidas(fechaInicioStr, fechaFinStr).subscribe(
            (data) => {
                this.actividadesVendidas = data; // Almacena los datos recibidos
                this.cdr.detectChanges();
            },
            (error) => {
                console.error('Error al generar el reporte de actividades:', error);
                this.actividadesVendidas = [];
            }
        );
    }
  }
}
