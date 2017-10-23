import {Component, Input, OnInit} from '@angular/core';
import {MsgAlertModel} from '../model/msg-alert.model';
import {MsgAlertaService} from "../resource/msg-alerta.service";

@Component({
  selector: 'app-msg-alert',
  templateUrl: './msg-alert.component.html',
  styleUrls: ['./msg-alert.component.css']
})
export class MsgAlertComponent implements OnInit {

  textoDestaque: string;
  conteudo: string;
  tipo: string;
  exibirmsg: boolean;

  @Input() mensagem: MsgAlertModel;

  constructor( ) { }

  ngOnInit() {

  }



}
