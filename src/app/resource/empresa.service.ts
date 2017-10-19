import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpresaService {

  constructor(
      private servicosGlobais: GlobalService
  ) { }




}
