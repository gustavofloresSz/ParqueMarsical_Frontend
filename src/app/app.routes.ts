import { Routes } from '@angular/router';
import { ActivitiesComponent } from './customers/pages/activities/activities.component';
import { LoginUserComponent } from './customers/pages/login-user/login-user.component';
import { MainComponent } from './customers/pages/main/main.component';
import { RegisterUserComponent } from './customers/pages/register-user/register-user.component';
import { WelcomeComponent } from './customers/pages/welcome/welcome.component';
import { MainAdminComponent } from './administrator/pages/main-admin/main-admin.component';

export const routes: Routes = [
  // RUTAS User
  { path: 'login-user', component: LoginUserComponent },
  { path: 'register-user', component: RegisterUserComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'activities', component: ActivitiesComponent },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
    ],
  },

  //Admin
  {path:"admin",component:MainAdminComponent},

  //Ruta por defecto
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];
