import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ProfileComponent } from '../../components/profile/profile.component';
import { MenuItem } from 'primeng/api';
import { EmotionService } from '../../services/emotion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenubarModule, ProfileComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(private emotionService: EmotionService, private router: Router) {}

  onOpinionsClick() {
    console.log('Respuesta del servidor:');
    this.emotionService.startRecognition().subscribe(() => {
    });
  }

  routes: MenuItem[] = [
    {
      label: 'Parque Mariscal',
    },
    {
      label: 'Bienvenido',
      icon: 'pi pi-home',
      routerLink: 'welcome',
    },
    {
      label: 'Entradas',
      icon: 'pi pi-receipt',
      routerLink: 'ticket',
    },
    {
      label: 'Actividades / Juegos',
      icon: 'pi pi-star-fill',
      routerLink: 'activities',
    },
    {
      label: 'Opiniones',
      icon: 'pi pi-envelope',
      routerLink: 'comments',
      command: () => {
        this.onOpinionsClick();
      },
    },
  ];
}
