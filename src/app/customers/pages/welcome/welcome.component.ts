import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  template: `
    <div
      class="grid grid-nogutter surface-section text-800 custom-style"
      style="background: rgba(255, 255, 255, 0) !important; backdrop-filter: blur(0px) !important; color: white !important; height: 50vh; display: flex; align-items: flex-end;"
    >
      <div
        class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
        style="margin-bottom: 2rem; height: 15vh; display: flex; align-items: flex-end;"
      >
        <section
          style="background: rgba(0, 0, 0, 0.6) !important; border-radius: 0.5rem; padding: 20px;"
        >
          <span class="block text-6xl font-bold mb-1"
            >Parque Mariscal Santa Cruz</span
          >
          <p class="mt-0 mb-4 text-700" style="color: white !important; font-size: 19px;">
            El Parque Mariscal Santa Cruz es un lugar ideal para disfrutar en
            familia, rodeado de áreas verdes, juegos, y actividades recreativas
            para todas las edades. Cuenta con espacios amplios, seguros y zonas
            de descanso para una experiencia completa de diversión y relajación.
          </p>
          <div class="mt-4">
            <strong>Nuestras redes sociales:</strong>
            <p></p>
            <a
              href="https://www.facebook.com/gamcochabamba/?locale=es_LA"
              target="_blank"
              class="ml-2"
            >
              <i class="pi pi-facebook" style="font-size: 24px;"></i>
            </a>
            <a
              href="https://www.instagram.com/cochabambaciudad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==a"
              target="_blank"
              class="ml-2"
            >
              <i class="pi pi-instagram" style="font-size: 24px;"></i>
            </a>
            <a
              href="https://www.tiktok.com/en/"
              target="_blank"
              class="ml-2"
            >
              <i class="pi pi-tiktok" style="font-size: 24px;"></i>
            </a>
            <div class="mt-4" style="color: white !important;">
              <strong>
                <i class="pi pi-phone"></i> Teléfono de referencia: 70703515
              </strong>
            </div>
          </div>
        </section>
      </div>

      <div class="col-12 md:col-6 overflow-hidden">
        <div
          class="custom-container"
          style="color: white !important; background: rgba(0, 0, 0, 0) !important; border-radius: 0.5rem;"
        >
          <div>
            <strong>Horario de Atención</strong>
            <div class="horarios-container">
              <div class="horario-item">
                <span class="dia">Lunes:</span>
                <span class="hora">Cerrado</span>
              </div>
              <div class="horario-item">
                <span class="dia">Martes:</span>
                <span class="hora">10:00 - 19:00</span>
              </div>
              <div class="horario-item">
                <span class="dia">Miércoles:</span>
                <span class="hora">10:00 - 19:00</span>
              </div>
              <div class="horario-item">
                <span class="dia">Jueves:</span>
                <span class="hora">10:00 - 19:00</span>
              </div>
              <div class="horario-item">
                <span class="dia">Viernes:</span>
                <span class="hora">10:00 - 19:00</span>
              </div>
              <div class="horario-item">
                <span class="dia">Sábado:</span>
                <span class="hora">10:00 - 19:00</span>
              </div>
              <div class="horario-item">
                <span class="dia">Domingo:</span>
                <span class="hora">10:00 - 19:00</span>
              </div>
            </div>
            <a
              routerLink="/main/ticket"
              class="p-button font-bold mt-4 no-underline"
              style="background-color: #608020; border: none; color: white; font-weight: bold; padding: 20px;"
            >
              Comprar
            </a>
          </div>
          <div>
            <div class="iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.2533028653284!2d-66.17523246035664!3d-17.40044328449205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373e5e5142ba7%3A0x4f38941cb77beddd!2sParque%20Acu%C3%A1tico!5e0!3m2!1ses!2sbo!4v1731234567890"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .horarios-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
      }
      .horario-item {
        display: flex;
        justify-content: space-between;
        color: white;
        font-size: 0.75rem; /* Ajusta este valor según el tamaño que prefieras */
      }
      .dia {
        font-weight: bold;
      }
      .hora {
        margin-left: auto;
      }
    `,
  ],
})
export class WelcomeComponent {}
