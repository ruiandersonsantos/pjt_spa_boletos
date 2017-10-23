import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {JwtTokenService} from './jwt-token.service';

@Injectable()
export class BuilderRequestService {

  private token: string;
  private headers: Headers;

  constructor(
        private jwtToken: JwtTokenService,
        private  http: Http,
        private srvGlobal: GlobalService
  ) {

    this.token = this.jwtToken.token;
  }

  builder(rota: string, verboHttp: string, obj: any): Promise<any>{

    this.headers = new Headers({'Authorization': 'Bearer ' + this.token});
    this. headers.set('Content-Type', 'application/json');


    if( this.srvGlobal.getVerboGET() === verboHttp){
        console.log(this.headers);
      return this.http.get(this.srvGlobal.getUrlBase() + rota, { headers: this.headers })
          .toPromise()
          .then( response => {

            return response;

          }).catch( error => {
            return Promise.reject(error);
          });

    };

    if( this.srvGlobal.getVerboPOST() === verboHttp){

      return this.http.post(this.srvGlobal.getUrlBase() + rota, obj, { headers: this.headers })
          .toPromise()
          .then( response => {

            return response;

          }).catch( error => {
            return Promise.reject(error);
          });

    };


    if( this.srvGlobal.getVerboPUT() === verboHttp){

      return this.http.put(this.srvGlobal.getUrlBase() + rota, obj, { headers: this.headers })
          .toPromise()
          .then( response => {
            return response;

          }).catch( error => {
            return Promise.reject(error);
          });

    };

    if( this.srvGlobal.getVerboDELETE() === verboHttp){

      return this.http.delete(this.srvGlobal.getUrlBase() + rota, { headers: this.headers })
          .toPromise()
          .then( response => {

            return response;

          }).catch( error => {
            return Promise.reject(error);
          });

    }


  }

}
