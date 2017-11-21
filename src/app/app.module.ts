import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { GlobalService } from './resource/global.service';
import { LoginService } from './resource/login.service';
import { LocalstorageService } from './resource/localstorage.service';
import { JwtTokenService } from './resource/jwt-token.service';
import { AuthGuardRouterService } from './resource/auth-guard-router.service';
import { LogoutComponent } from './logout/logout.component';

import {BuilderRequestService} from './resource/builder-request.service';

import {MenuModule} from './menu/menu.module';
import {PainelModule} from './painel/painel.module';
import {EmpresaModule} from './empresa/empresa.module';
import {UsuarioModule} from './usuario/usuario.module';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,


        EmpresaModule,
        PainelModule,
        MenuModule,
        UsuarioModule

    ],

    providers: [

        GlobalService,
        LoginService,
        LocalstorageService,
        JwtTokenService,
        AuthGuardRouterService,
        BuilderRequestService,


    ],
    bootstrap: [AppComponent]
})
export class AppModule { }