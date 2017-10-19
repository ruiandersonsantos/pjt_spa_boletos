import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { EmpresaNewComponent } from './empresa/empresa-new.component';
import { EmpresaEditComponent } from './empresa/empresa-edit.component';
import { LoginComponent } from './login/login.component';

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
    component: HomeComponent
  },
  {
    path: 'list',
    component: EmpresaComponent
  },
  {
    path: 'novo',
    component: EmpresaNewComponent
  },
  {
    path: 'editar',
    component: EmpresaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
