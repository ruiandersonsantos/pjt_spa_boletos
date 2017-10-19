import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class GlobalService {

  constructor() { }

  getUrlBase(){
    return environment.urlBase;
  }

  getUrlLogin(){
    return environment.urlLogin;
  }

  getUrlLogout(){
    return environment.urlLogout;
  }

  getClientId(){
    return environment.client_id;
  }

  getClientSecret(){
    return environment.client_Secret;
  }

  getGrantType(){
    return environment.grant_type;
  }
}

