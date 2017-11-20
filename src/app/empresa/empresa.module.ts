import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmpresaEditComponent} from './empresa-edit.component';
import {EmpresaNewComponent} from './empresa-new.component';
import {EmpresaComponent} from './empresa.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {PainelModule} from '../painel/painel.module';
import {MsgAlertModule} from '../msg-alert/msg-alert.module';

import {FormsModule} from '@angular/forms';
import {EmpresaService} from '../resource/empresa.service';

@NgModule({
  imports: [

    CommonModule,
    PainelModule,
    MsgAlertModule,
    NgbModule.forRoot(),

    FormsModule
  ],
  declarations: [

    EmpresaComponent,
    EmpresaNewComponent,
    EmpresaEditComponent,

  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }
