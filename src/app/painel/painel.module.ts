import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PainelComponent} from './painel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  exports: [
    PainelComponent
  ],
  declarations: [

    PainelComponent
  ]
})
export class PainelModule { }
