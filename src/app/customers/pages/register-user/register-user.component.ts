import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../services';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './register-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterUserComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);

  formUser = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    ci: ['', Validators.required],
    password: ['', Validators.required],
  });

  create() {
    if (this.formUser.invalid) return;
    console.log(this.formUser.value);
    this.userService.register(this.formUser.value).subscribe(() => {
      this.router.navigateByUrl('/main');
    });
  }
}
