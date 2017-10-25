import {EventEmitter, Injectable} from '@angular/core';
import {EmpresaService} from './empresa.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private empresaservice: EmpresaService ) { }

  static listarEmpresas = new EventEmitter<any>();
  static listarHome = new EventEmitter<any>();

  empresas: [''];

  getEmpresaMenu(): Promise<any> {
    return this.empresaservice.buscarEmpresas().then( response => {
      this.empresas = response.json();

      // chamada statica
      MenuService.listarEmpresas.emit(this.empresas);

      return this.empresas;

    }).catch( error => {
        return Promise.reject(error);
    });
  }

  getHomeaMenu(): Promise<any> {

    MenuService.listarHome.emit('Entrou no Home');
    return Promise.resolve( response => {
      return true;
    });
  }


}
