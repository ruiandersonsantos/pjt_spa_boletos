import { Component, OnInit } from '@angular/core';
import { LoginService } from '../resource/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;

  constructor( public login: LoginService) {
  }


  ngOnInit() {

  }

  toggleMenu() {

    this.isCollapsed = !this.isCollapsed;
  }

}
