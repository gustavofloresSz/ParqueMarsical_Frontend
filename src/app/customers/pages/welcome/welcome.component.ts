import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="grid grid-nogutter surface-section text-800">
      <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
        <section>
          <span class="block text-6xl font-bold mb-1">Parque Mariscal SantaCruz</span>
          <p class="mt-0 mb-4 text-700 line-height-3">
            El Parque Mariscal SantaCruz es un lugar ideal para disfrutar en familia, rodeado de áreas verdes, juegos, y actividades recreativas para todas las edades. Cuenta con espacios amplios, seguros y zonas de descanso para una experiencia completa de diversión y relajación.
          </p>
          <div class="mb-4">
            <strong>Ingreso:</strong>
          </div>
          <ul class="list-none pl-0 mb-4 text-700">
            <li>Niños: Bs 3.50</li>
            <li>Adultos: Bs 5.00</li>
          </ul>
          <div class="flex justify-content-between">
            <div>
              <strong>Horario de Atención:</strong>
              <ul class="list-none pl-0 text-700">
                <li>Lunes: Cerrado</li>
                <li>Martes: 10:00 - 19:00</li>
                <li>Miércoles: 10:00 - 19:00</li>
                <li>Jueves: 10:00 - 19:00</li>
                <li>Viernes: 10:00 - 19:00</li>
                <li>Sábado: 10:00 - 19:00</li>
                <li>Domingo: 10:00 - 19:00</li>
              </ul>
            </div>
            <div class="ml-4 text-700">
              <strong>Ubicación:</strong>
              <p>Ciudad de Cochabamba</p>
              <p>Zona La Chimba, calle Hernán Morales</p>
              <strong>Altura:</strong>
              <p>2,400 a 2,950 m.s.n.m.</p>
            </div>
          </div>
          <a routerLink="/" class="p-button font-bold mt-4">
            Comprar
          </a>
        </section>
      </div>
      <div class="col-12 md:col-6 overflow-hidden">
        <img
          src="assets/img/welcome.jpg"
          alt="Image"
          class="md:ml-auto block md:h-full"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
