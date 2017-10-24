import {EventEmitter, Injectable} from '@angular/core';
import {EmpresaService} from './empresa.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private empresaservice: EmpresaService ) { }

  listarObjetos = new EventEmitter<any>();

  empresas: [''];

  getEmpresaMenu(): Promise<any> {
    return this.empresaservice.buscarEmpresas().then( response => {
      this.empresas = response.json();

      this.listarObjetos.emit(this.empresas);

      return this.empresas;

    }).catch( error => {
        return Promise.reject(error);
    });
  }

  getHomeaMenu() {
   this.listarObjetos.emit('Entrou no Home');

    return true;
  }


}
