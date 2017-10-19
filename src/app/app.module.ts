import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EmpresaNewComponent } from './empresa/empresa-new.component';
import { EmpresaEditComponent } from './empresa/empresa-edit.component';
import { LoginComponent } from './login/login.component';
import { GlobalService } from './resource/global.service';
import { LoginService } from './resource/login.service';
import { LocalstorageService } from './resource/localstorage.service';
import { JwtTokenService } from './resource/jwt-token.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    MenuComponent,
    HomeComponent,
    EmpresaNewComponent,
    EmpresaEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [GlobalService, LoginService, LocalstorageService, JwtTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }