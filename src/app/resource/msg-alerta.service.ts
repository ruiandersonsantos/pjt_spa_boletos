import {EventEmitter, Injectable} from '@angular/core';
import {MsgAlertModel} from '../model/msg-alert.model';

@Injectable()
export class MsgAlertaService {

  private alerta: MsgAlertModel;

    emitirMensagem = new EventEmitter<MsgAlertModel>();

  constructor() {
    this.alerta = new MsgAlertModel();
  }

  getAlerta (tipo: number, textoDestaque: string, conteudo: string): MsgAlertModel  {

      this.alerta.textoDestaque = textoDestaque;
      this.alerta.conteudo = conteudo;
      this.alerta.tipo = tipo === 1 ? 'success' : 'danger';
      this.alerta.exibirmsg = true;

    return this.alerta;
  }

  emitirMensagemNaTela(alerta: MsgAlertModel){
      this.emitirMensagem.emit(alerta);
  }


}
