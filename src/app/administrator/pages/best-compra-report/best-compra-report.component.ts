import { ChangeDetectorRef, Component } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-best-compra-report',
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
  templateUrl: './best-compra-report.component.html',
  styleUrls: ['./best-compra-report.component.css'],
})
export class BestCompraReportComponent {
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  actividades: any[] = [];

  constructor(
    private reportsService: ReportsService,
    private cdr: ChangeDetectorRef
  ) {}

  generarReporteActividad() {
    if (this.fechaInicio && this.fechaFin) {
      const fechaInicioStr = this.fechaInicio.toISOString().split('T')[0];
      const fechaFinStr = this.fechaFin.toISOString().split('T')[0];

      this.reportsService
        .getActividadMasVendida(fechaInicioStr, fechaFinStr)
        .subscribe(
          (data) => {
            this.actividades = data.actividades;
            this.cdr.detectChanges();
          },
          (error) => {
            console.error('Error al generar el reporte de actividades:', error);
            this.actividades = [];
          }
        );
    }
  }
}