import { Component, OnInit } from '@angular/core';
import { LoginService } from '../resource/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor( public login: LoginService) { }


  ngOnInit() {


  }

}
