import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnInit,
} from '@angular/core';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../services';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [CommonModule, AvatarModule, AvatarGroupModule, MenuModule],
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
export class ProfileComponent implements OnInit {
  fullname = computed(() => this.userService.fullname());
  options = computed<MenuItem[]>(() => {
    if (!this.userService.fullname()) {
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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.checkAuthStatus().subscribe();
  }

  private logout() {
    this.userService.logout();
  }

  private login() {
    this.router.navigateByUrl('/login-user');
  }
}
