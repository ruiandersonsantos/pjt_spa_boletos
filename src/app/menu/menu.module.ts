
import { NgModule } from '@angular/core';
import {MenuComponent} from './menu.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {HttpModule} from '@angular/http';
import {LoginService} from '../resource/login.service';
import {MenuService} from '../resource/menu.service';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
       CommonModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        AppRoutingModule


    ],
    exports:[
        MenuComponent
    ],
    providers: [


        LoginService,
        MenuService
    ],

})
export class MenuModule { }