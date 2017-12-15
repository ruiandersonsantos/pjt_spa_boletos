import {EventEmitter, Injectable} from '@angular/core';
import { GlobalService } from './global.service';
import 'rxjs/add/operator/toPromise';
import { BuilderRequestService } from './builder-request.service';

import {MsgAlertaService} from './msg-alerta.service';

@Injectable()
export class UsuarioService {

    private objusuario: any;

  constructor(  private servicosGlobais: GlobalService,
                private builderservice: BuilderRequestService,
                private msgservice: MsgAlertaService) { }


  buscarUsuarios(): Promise<any>{
    return this.builderservice.builder('/usuarios', this.servicosGlobais.getVerboGET(), {})
        .then(response => {
          return response;
        })
        .catch( error => {
          return Promise.reject(error);
        })
  }


    salvar(plo_usuario): Promise<any>{
        this.objusuario = plo_usuario;

        return this.builderservice.builder('/usuarios', this.servicosGlobais.getVerboPOST(), this.objusuario)
            .then( response => {
                let alerta = this.msgservice.getAlerta(1, response.json().name, ' cadastrada com sucesso.');
                this.msgservice.emitirMensagemNaTela(alerta);
                return response;

            })
            .catch( error => {
                return Promise.reject(error);
            });
    }


    atualizar(plo_usuario): Promise<any>{
        this.objusuario = plo_usuario;
        let id = this.objusuario.id;

        return this.builderservice.builder('/usuarios/' + id, this.servicosGlobais.getVerboPUT(), this.objusuario)
            .then( response => {
                return response;
            })
            .catch( error => {
                return Promise.reject(error);
            });
    }


    buscarEmpresaPorID(id): Promise<any>{
        return this.builderservice.builder('/usuarios/'+id, this.servicosGlobais.getVerboGET(), {})
            .then(response => {
                return response;
            })
            .catch( error => {
                return Promise.reject(error);
            })
    }


    removerUsuario(id): Promise<any>{
        return this.builderservice.builder('/usuarios/'+id, this.servicosGlobais.getVerboDELETE(), {})
            .then(response => {
                return response;
            })
            .catch( error => {
                return Promise.reject(error);
            })
    }




}
