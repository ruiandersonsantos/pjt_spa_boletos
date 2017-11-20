import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PainelComponent} from './painel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,

    NgbModule.forRoot(),
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
