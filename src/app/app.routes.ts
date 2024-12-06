import { Routes } from '@angular/router';
import { ActivitiesComponent } from './customers/pages/activities/activities.component';
import { LoginUserComponent } from './customers/pages/login-user/login-user.component';
import { MainComponent } from './customers/pages/main/main.component';
import { RegisterUserComponent } from './customers/pages/register-user/register-user.component';
import { WelcomeComponent } from './customers/pages/welcome/welcome.component';
import { MainAdminComponent } from './administrator/pages/main-admin/main-admin.component';
import { TicketComponent } from './customers/pages/ticket/ticket.component';
import { ModifyAdminComponent } from './administrator/pages/modify-admin/modify-admin.component';
import { ReportsAdminComponent } from './administrator/pages/users-reports/users-report.component';
import { EntradasReportComponent } from './administrator/pages/entradas-actividades-report/entradas-actividades-report.component';
import { IncomeReportComponent } from './administrator/pages/income-report/income-report.component';
import { BestCompraReportComponent } from './administrator/pages/best-compra-report/best-compra-report.component';
import { CommentsComponent } from './customers/pages/comments/comments.component';

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
      {path: 'comments',component:CommentsComponent},
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
      {path:'report',component:ReportsAdminComponent},
      {path:'entradasReport',component:EntradasReportComponent},
      {path:'income',component:IncomeReportComponent},
      {path:'bestCompra',component:BestCompraReportComponent}
    ]
  },

  //Ruta por defecto
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];
