import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../services';
import { AdminService } from '../../../administrator/services/admin.service';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
  ],
  templateUrl: './login-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);
  private adminService = inject(AdminService); // Inyectar AdminService

  loginForm = this.fb.nonNullable.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (this.loginForm.invalid) return;

    const { login, password } = this.loginForm.value;

    if (login === 'admin') {
      this.adminService.login({ login, password }).subscribe(
        () => this.router.navigateByUrl('/mainAdmin'),
        (error) => console.error(error)
      );
    } else {
      this.userService.login({ login, password }).subscribe(
        () => this.router.navigateByUrl('/main'),
        (error) => console.error(error)
      );
    }
  }
}
