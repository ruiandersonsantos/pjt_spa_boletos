import { Component, OnInit } from '@angular/core';
import { PainelModel } from '../model/painel.model';
import { MenuService } from '../resource/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public menuservice: MenuService ) {

  }

  painel: PainelModel = new PainelModel(

      'fa fa-home',
      'Home',
      'sem-rota',
      'painel_id_home',
      'sem-botao',
      true
  );

  ngOnInit() {


  }

}
