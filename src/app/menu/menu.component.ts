import { Component, OnInit } from '@angular/core';

import { MenuService } from '../resource/menu.service';
import {Router} from '@angular/router';
import {LoginService} from '../resource/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = true;

  constructor( public login: LoginService, public menuservice: MenuService, private router: Router) {
  }


  ngOnInit() {

  }

  toggleMenu() {

    this.isCollapsed = !this.isCollapsed;
  }

  clicouEmpresas(){
    this.menuservice.getEmpresaMenu()
        .then(response => {
          setInterval(() => {
            this.router.navigate(['empresa']);
          },400);

        }).catch( error => {
      // colocar msg de erro na tela
    });


  }

}
