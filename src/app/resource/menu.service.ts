import {EventEmitter, Injectable} from '@angular/core';
import {EmpresaService} from './empresa.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private empresaservice: EmpresaService ) { }

  empresas: [''];

  getEmpresaMenu() {
    return  true;
  }

  getHomeaMenu(): Promise<any> {

    return Promise.resolve( response => {
      return true;
    });
  }


}
