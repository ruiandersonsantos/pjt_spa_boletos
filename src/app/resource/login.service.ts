import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import 'rxjs/add/operator/toPromise';
import { Http, Headers } from '@angular/http';
import { LocalstorageService } from './localstorage.service';
import { JwtTokenService } from './jwt-token.service';

const USER_KEY = 'str_usuario';

@Injectable()
export class LoginService {



  constructor(
      private srvGlobal: GlobalService,
      private  http: Http,
      private  localStorage: LocalstorageService,
      private jwtToken: JwtTokenService
  ) { }

  private headers: Headers;



  private objlogin = {
    grant_type: this.srvGlobal.getGrantType(),
    client_id: this.srvGlobal.getClientId(),
    client_secret: this.srvGlobal.getClientSecret(),
    username: '',
    password: ''
  };

  private objUsuarioLogado = {
    nome: '',
    email: '',
    cia_secret: '',
    nivel: '',
    status: ''
  };

  login(username, password): Promise<any>{

    this.objlogin.username = username;
    this.objlogin.password = password;

    return this.http.post(this.srvGlobal.getUrlLogin(), this.objlogin)
        .toPromise()
        .then(response => {

          let token;
          let refresh_token;

          token = response.json().access_token;
          refresh_token = response.json().refresh_token;

          this.jwtToken.token = token;
          this.jwtToken.refreshToken = refresh_token;

          this.getUsuario(token);


        });
  }


  private getUsuario(tokenDeAcesso){
   this.headers = new Headers({'Authorization': 'Bearer ' + tokenDeAcesso});
    this.http.get(this.srvGlobal.getUrlBase() + '/user', {headers: this.headers})
        .toPromise()
        .then( usuario => {

          this.objUsuarioLogado = usuario.json();
          this.localStorage.setObject(USER_KEY, this.objUsuarioLogado);
        });
  }


}
