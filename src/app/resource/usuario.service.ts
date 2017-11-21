import {EventEmitter, Injectable} from '@angular/core';
import { GlobalService } from './global.service';
import 'rxjs/add/operator/toPromise';
import { BuilderRequestService } from './builder-request.service';

import {MsgAlertaService} from './msg-alerta.service';

@Injectable()
export class UsuarioService {

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

}
