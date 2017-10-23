import {EventEmitter, Injectable} from '@angular/core';
import {EmpresaService} from './empresa.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private empresaservice: EmpresaService ) { }

  listarEmpresa = new EventEmitter<any>();

  empresas: [''];

  getEmpresaMenu(): Promise<any> {
    return this.empresaservice.buscarEmpresas().then( response => {
      this.empresas = response.json();

      this.listarEmpresa.emit(this.empresas);

      return this.empresas;

    }).catch( error => {
        return Promise.reject(error);
    });
  }

}
