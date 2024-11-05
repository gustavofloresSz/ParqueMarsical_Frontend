import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { FloatLabel } from 'primeng/floatlabel';
import { ProfileComponent } from '../../components/profile/profile.component';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenubarModule, ProfileComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  routes: MenuItem[] = [
    {
      label: 'Parque Mariscal',
    },
    {
      label: 'Bievenido',
      icon: 'pi pi-home',
      routerLink: 'welcome',

    },
    {
      label: 'Entradas',
      icon: 'pi pi-receipt',
    },
    {
      label: 'Actividades / Juegos',
      icon: 'pi pi-star-fill',
      routerLink: 'activities',
    },
  ];
}
