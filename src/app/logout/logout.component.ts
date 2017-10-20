import { Component, OnInit } from '@angular/core';
import { LoginService } from '../resource/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  percent: number = 0;
  redirectAfterLogin = ['/login'];

  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit() {

    this.logout();
  }

  logout(){
    this.loginservice.logout();
    setInterval(() => {
      this.percent +=  10;

      if(this.percent === 100){
        this.router.navigate(this.redirectAfterLogin);
      }
    }, 400);
  }

}
