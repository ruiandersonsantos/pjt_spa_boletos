import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import 'rxjs/add/operator/toPromise';
import { BuilderRequestService } from './builder-request.service';

@Injectable()
export class EmpresaService {

  private objempresa: any;

  constructor(
      private servicosGlobais: GlobalService,
      private builderservice: BuilderRequestService,

  ) { }



  salvar(plo_empresa): Promise<any>{
    this.objempresa = plo_empresa;

    return this.builderservice.builder('/empresas', this.servicosGlobais.getVerboPOST(), this.objempresa)
        .then( response => {
      return response;

    })
        .catch( error => {
          return Promise.reject(error);
        });
  }

  buscarEmpresas(): Promise<any>{
    return this.builderservice.builder('/empresas', this.servicosGlobais.getVerboGET(), {})
        .then(response => {
          return response;
        })
        .catch( error => {
          return Promise.reject(error);
        })
  }


    buscarEmpresaPorID(id): Promise<any>{
        return this.builderservice.builder('/empresas/'+id, this.servicosGlobais.getVerboGET(), {})
            .then(response => {
                return response;
            })
            .catch( error => {
                return Promise.reject(error);
            })
    }

    atualizar(plo_empresa): Promise<any>{
        this.objempresa = plo_empresa;
        let id = this.objempresa.id;

        return this.builderservice.builder('/empresas/' + id, this.servicosGlobais.getVerboPUT(), this.objempresa)
            .then( response => {
                return response;
            })
            .catch( error => {
                return Promise.reject(error);
            });
    }


}
