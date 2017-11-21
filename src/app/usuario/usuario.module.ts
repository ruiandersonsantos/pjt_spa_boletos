import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PainelModule} from '../painel/painel.module';
import {MsgAlertModule} from '../msg-alert/msg-alert.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {UsuarioComponent} from './usuario.component';
import {UsuarioService} from '../resource/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    PainelModule,
    MsgAlertModule,
    NgbModule.forRoot(),

    FormsModule
  ],
  declarations: [
    UsuarioComponent
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
