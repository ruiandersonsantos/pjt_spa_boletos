import {Component, Input, OnInit } from '@angular/core';
import {PainelModel} from '../model/painel.model';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  @Input() painel: PainelModel;


  constructor() { }

  ngOnInit() {
  }


}
