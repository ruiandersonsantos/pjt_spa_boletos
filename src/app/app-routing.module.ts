import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { EmpresaNewComponent } from './empresa/empresa-new.component';
import { EmpresaEditComponent } from './empresa/empresa-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardRouterService } from './resource/auth-guard-router.service';
import { LogoutComponent } from './logout/logout.component';
import {UsuarioComponent} from './usuario/usuario.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'empresa',
    component: EmpresaComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'empresa/novo',
    component: EmpresaNewComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'empresa/editar',
    component: EmpresaEditComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuardRouterService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
