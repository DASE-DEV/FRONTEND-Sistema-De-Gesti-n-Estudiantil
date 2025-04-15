import { Routes } from '@angular/router';
import { PruebasComponent } from './shared/pruebas/pruebas.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { DetalleAsignaturaComponent } from './asignaturas/detalle-asignatura/detalle-asignatura.component';
import { LoginComponent } from './core/auth/login/login.component';
import { DashboardSuperAdminComponent } from './features/super-admin/dashboard-super-admin/dashboard-super-admin.component';
import { SidemenuComponent } from './core/components/sidemenu/sidemenu.component';
import { StudentLayoutComponent } from './core/layouts/student-layout/student-layout.component';
import { CreateProgramComponent } from './features/super-admin/programs/create-program/create-program/create-program.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard-super-admin', component: DashboardSuperAdminComponent },
  { path: 'create-program', component: CreateProgramComponent },
  { path: 'student', component:StudentLayoutComponent },
  { path: 'pruebas', component: PruebasComponent },
  { path: 'spinner', component:  LoadingSpinnerComponent },
  { path: 'footer', component:  FooterComponent },
  { path: 'sidemenu', component:  SidemenuComponent },
  { path: 'asignaturas', component:  AsignaturasComponent },
  { path: 'detalle-asignatura/:nombre', component: DetalleAsignaturaComponent },
  { path: '', component: PruebasComponent },
  { path: '**', redirectTo: 'login' }
];

