import {Component, Input, OnInit, Output} from '@angular/core';
import {PainelModel} from '../model/painel.model';
import {MsgAlertModel} from "../model/msg-alert.model";

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
