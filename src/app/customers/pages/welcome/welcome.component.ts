import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ButtonModule,RouterModule],
  template: `
    <div class="grid grid-nogutter surface-section text-800 custom-style " 
    style="background: rgba(255, 255, 255, 0) !important;backdrop-filter: blur(0px) !important; color: white !important; height: 68vh; display: flex; align-items: flex-end;">
      
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center " style="margin-bottom: 2rem; height: 15vh; display: flex; align-items: flex-end;" >  
        <section style="background: rgba(0, 0, 0, 0.6) !important; border-radius: 0.5rem;padding:20px">
          <span class="block text-6xl font-bold mb-1" >Parque Mariscal Santa Cruz</span>
          <p class="mt-0 mb-4 text-700 line-height-3" style="color: white !important;">
            El Parque Mariscal SantaCruz es un lugar ideal para disfrutar en familia, rodeado de áreas verdes, juegos, y actividades recreativas para todas las edades. Cuenta con espacios amplios, seguros y zonas de descanso para una experiencia completa de diversión y relajación.
          </p>
          <div class="mb-4" style="color: white !important;">
            <strong>Ingreso:</strong>
          </div>
          <ul class="list-none pl-0 mb-4 text-700" style="color: white !important;">
            <li>Niños: Bs 3.50</li>
            <li>Adultos: Bs 5.00</li>
          </ul>
          
          <div class="mt-4">
            <strong>Nuestras redes sociales:</strong>
              <a href="https://www.facebook.com/gamcochabamba/?locale=es_LA" target="_blank" class="ml-2">
                <i class="pi pi-facebook" style="font-size: 24px;"></i>
              </a>
              <a href="https://www.instagram.com/cochabambaciudad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==a" target="_blank" class="ml-2">
                <i class="pi pi-instagram" style="font-size: 24px;"></i>
              </a>
            <div class="mt-4" style="color: black !important;">
              <strong>
                <i class="pi pi-phone"></i> Teléfono de referencia: 70703515
              </strong>
            </div>
          </div>
        </section>
      </div>
      <div class="col-12 md:col-6 overflow-hidden">
      <div class="custom-container" style="color: white !important;background: rgba(0, 0, 0, 0) !important; border-radius: 0.5rem;">
            <div >
              <strong>Horario de Atención:</strong>
              <ul class="list-none pl-0 text-700" style="color: white !important;">
                <li>Lunes: Cerrado</li>
                <li>Martes: 10:00 - 19:00</li>
                <li>Miércoles: 10:00 - 19:00</li>
                <li>Jueves: 10:00 - 19:00</li>
                <li>Viernes: 10:00 - 19:00</li>
                <li>Sábado: 10:00 - 19:00</li>
                <li>Domingo: 10:00 - 19:00</li>
              </ul>
            </div>
            <div >
              <strong>Ubicación:</strong>
              <p>Ciudad de Cochabamba</p>
              <p>Zona La Chimba, calle Hernán Morales</p>
              <strong>Altura:</strong>
              <p>2,400 a 2,950 m.s.n.m.</p>
              <a routerLink="/main/ticket" class="p-button font-bold mt-4 no-underline" style="background-color: #608020/*#56721c*//*#414d3f*/ ; border: none; color: white; font-weight: bold; padding: 20px;">
              Comprar
              </a>
            </div>
          </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
