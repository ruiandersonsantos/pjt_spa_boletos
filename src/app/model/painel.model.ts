import {MsgAlertModel} from './msg-alert.model';
export class PainelModel {

        icone: string;
        titulo: string;
        rota_botao: string;
        id_botao: string;
        nome_botao: string;
        mostraBotaoNovo: boolean


        constructor(icone, titulo, rota_botao, id_botao, nome_botao, mostraBotaoNovo){

            this.icone = icone;
            this.titulo = titulo;
            this.rota_botao = rota_botao;
            this.id_botao = id_botao;
            this.nome_botao = nome_botao;
            this.mostraBotaoNovo = mostraBotaoNovo;

        }


}