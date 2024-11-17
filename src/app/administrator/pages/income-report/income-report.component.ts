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
  selector: 'app-income-report',
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
  templateUrl: './income-report.component.html',
  styleUrl: './income-report.component.css'
})
export class IncomeReportComponent {
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  totalGanancias: number | null = null;
  totalGananciasActivities: number | null = null;
  gananciasPorEntrada: { descripcion: string; cantidad: number; ingreso: number }[] = [];
  gananciasPorActividad: { descripcion: string; cantidad: number; ingreso: number }[] = [];
  mostrarGananciasEntradas: boolean = false;
  mostrarGananciasActividades: boolean = false;

  constructor(private reportsService: ReportsService, private cdr: ChangeDetectorRef) {}

  generarReporteGanancias() {
    if (this.fechaInicio && this.fechaFin) {
      const fechaInicioStr = this.fechaInicio.toISOString().split('T')[0];
      const fechaFinStr = this.fechaFin.toISOString().split('T')[0];

      this.reportsService.getGananciasEntrada(fechaInicioStr, fechaFinStr).subscribe(
        (data) => {
          this.totalGanancias = data.totalGanancias;
          this.gananciasPorEntrada = data.gananciasPorEntrada; // Almacena las ganancias por entrada
          this.mostrarGananciasEntradas = true;
          this.mostrarGananciasActividades = false;
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error al generar el reporte de ganancias:', error);
          this.totalGanancias = null;
          this.gananciasPorEntrada = [];
        }
      );
    }
  }

  generarReporteActividades() {
    if (this.fechaInicio && this.fechaFin) {
      const fechaInicioStr = this.fechaInicio.toISOString().split('T')[0];
      const fechaFinStr = this.fechaFin.toISOString().split('T')[0];

      this.reportsService.getGananciasActividad(fechaInicioStr, fechaFinStr).subscribe(
        (data) => {
          this.totalGananciasActivities = data.totalGananciasActivities;
          this.gananciasPorActividad = data.gananciasPorActividad;
          this.mostrarGananciasActividades = true;
          this.mostrarGananciasEntradas = false;
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error al generar el reporte de ganancias:', error);
          this.totalGananciasActivities = null;
          this.gananciasPorActividad = [];
        }
      );
    }
  }
}
