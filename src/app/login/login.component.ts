import { Component, OnInit } from '@angular/core';
import { LoginService } from '../resource/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public objUser = {
    usermane: '',
    password: ''
  }
//simone
  redirectAfterLogin = ['/home'];

  constructor( private srvlogin: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.srvlogin.login(this.objUser.usermane, this.objUser.password)
        .then(obj =>{
          this.router.navigate(this.redirectAfterLogin);
        });
  }

}
