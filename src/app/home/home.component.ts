import { Component, OnInit } from '@angular/core';
import { PainelModel } from '../model/painel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  painel: PainelModel = new PainelModel(

      'building-o',
      'Home',
      'sem-rota',
      'painel_id_home',
      'sem-botao',
      true
  );

  ngOnInit() {
  }

}
