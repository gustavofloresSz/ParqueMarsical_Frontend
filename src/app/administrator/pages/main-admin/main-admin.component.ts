import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ProfileAdminComponent } from "../../components/profileAdmin/profileAdmin.component";

@Component({
  selector: 'app-main-admin',
  standalone: true,
  imports: [MenubarModule, CommonModule, ProfileAdminComponent],
  templateUrl: './main-admin.component.html',
  styleUrl: './main-admin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAdminComponent  {
  routesAdmin: MenuItem[] = [
    {
      label: 'Panel administrador - Parque Mariscal',
    },
    {
      label: 'Administrar Actividades/Entradas',
      icon: 'pi pi-fw pi-briefcase',
      routerLink: 'modify',
    },
    {
      label: 'Generar Reportes',
      icon: 'pi pi-star-fill',
      routerLink:'report'
      
    },
  ];
}
