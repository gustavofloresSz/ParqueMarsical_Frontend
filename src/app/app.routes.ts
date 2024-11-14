import { Routes } from '@angular/router';
import { ActivitiesComponent } from './customers/pages/activities/activities.component';
import { LoginUserComponent } from './customers/pages/login-user/login-user.component';
import { MainComponent } from './customers/pages/main/main.component';
import { RegisterUserComponent } from './customers/pages/register-user/register-user.component';
import { WelcomeComponent } from './customers/pages/welcome/welcome.component';
import { MainAdminComponent } from './administrator/pages/main-admin/main-admin.component';
import { TicketComponent } from './customers/pages/ticket/ticket.component';
import { ModifyAdminComponent } from './administrator/pages/modify-admin/modify-admin.component';
import { ReportsAdminComponent } from './administrator/pages/reports-admin/reports-admin.component';

export const routes: Routes = [
  // RUTAS User
  { path: 'login-user', component: LoginUserComponent },
  { path: 'register-user', component: RegisterUserComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {path:'ticket',component:TicketComponent},
      { path: 'activities', component: ActivitiesComponent },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
    ],
  },

  //Admin rutas
  {path:"mainAdmin",component:MainAdminComponent,
    children:[
      {path:'modify',component:ModifyAdminComponent},
      {path:'report',component:ReportsAdminComponent}
    ]
  },

  //Ruta por defecto
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];
