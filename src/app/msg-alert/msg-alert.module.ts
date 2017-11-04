import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MsgAlertComponent} from './msg-alert.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MsgAlertaService} from '../resource/msg-alerta.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
  ],
  exports: [
    MsgAlertComponent
  ],
  declarations: [
      MsgAlertComponent
  ],
  providers: [
    MsgAlertaService
  ]
})
export class MsgAlertModule { }
