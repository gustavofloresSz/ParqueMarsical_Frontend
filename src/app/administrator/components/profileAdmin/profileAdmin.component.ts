import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'profileAdmin',
  standalone: true,
  imports: [
    CommonModule, AvatarModule, AvatarGroupModule, MenuModule
  ],
  template: `
    <div class="flex align-items-center">
      <div (click)="menu.toggle($event)">
        <p-avatar icon="pi pi-user" size="large" shape="circle" />
      </div>
    </div>
    <p-menu
      #menu
      [popup]="true"
      [model]="options()"
      styleClass="w-full md:w-18rem"
    >
      <ng-template pTemplate="start">
        <span class="inline-flex align-items-center gap-1 p-4"
          >{{ fullname() ?? 'SIN INICIAR' }}
        </span>
      </ng-template>

      <ng-template pTemplate="item" let-item>
        <a pRipple class="flex align-items-center p-menuitem-link">
          <span [class]="item.icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </ng-template>
    </p-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAdminComponent {
  fullname = computed(() => this.adminService.fullname());
  options = computed<MenuItem[]>(() => {
    if (!this.adminService.fullname()) {
      return [
        {
          label: 'Iniciar sesion',
          icon: 'pi pi-sign-in',
          command: () => {
            this.login();
          },
        },
      ];
    }
    return [
      {
        label: 'Cerrar sesion',
        icon: 'pi pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
  });

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminService.checkAuthStatus().subscribe();
  }

  private logout() {
    this.adminService.logout();
    this.router.navigateByUrl('/main'); //cerrar sesion admin lleva al main user
  }

  private login() {
    // this.router.navigateByUrl('/login-user');
  }
 }
