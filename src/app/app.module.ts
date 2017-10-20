import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { AuthGuardRouterService } from './resource/auth-guard-router.service';
import { LogoutComponent } from './logout/logout.component';
import {EmpresaService} from './resource/empresa.service';
import {BuilderRequestService} from './resource/builder-request.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    MenuComponent,
    HomeComponent,
    EmpresaNewComponent,
    EmpresaEditComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [  GlobalService,
                LoginService,
                LocalstorageService,
                JwtTokenService,
                AuthGuardRouterService,
                EmpresaService,
                BuilderRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }