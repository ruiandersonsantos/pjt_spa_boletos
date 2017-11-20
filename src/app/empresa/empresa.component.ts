import {Component, OnInit} from '@angular/core';
import {EmpresaService} from '../resource/empresa.service';
import {ActivatedRoute, Router} from '@angular/router';
import { PainelModel } from './../model/painel.model';
import {MsgAlertModel} from '../model/msg-alert.model';
import {MenuService} from '../resource/menu.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas: [''];
  public razao_social;

  mensagem: MsgAlertModel;

  painel: PainelModel = new PainelModel(
      'fa fa-list-alt',
      'Listagem de Empresa',
      '/empresa/novo',
      'painel_id_empresas',
      'Nova Empresa',
      true
  );


  constructor(
      private empresaservice: EmpresaService,
      private router: Router,
      private activatedRoute: ActivatedRoute



  ) {


  }

  ngOnInit() {

    MenuService.listarEmpresas.subscribe( empresas => {
      this.empresas = empresas;

      console.log(this.empresas);
    });

    this.mensagem = new MsgAlertModel();
    this.getEmpresas();


  }

  getEmpresas(){
    this.empresaservice.buscarEmpresas().then( response => {
      this.empresas = response.json();
      this.montaMensagem();

    }).catch( error => {

    })
  }



  editar(e, empresa){
    e.preventDefault();
    this.router.navigate(['empresa/editar'], {queryParams: empresa});
  }

  private montaMensagem() {
    this.mensagem.exibirmsg = this.activatedRoute.snapshot.queryParams['exibirmsg'];
    this.mensagem.tipo = this.activatedRoute.snapshot.queryParams['tipo'];
    this.mensagem.conteudo = this.activatedRoute.snapshot.queryParams['conteudo'];
    this.mensagem.textoDestaque = this.activatedRoute.snapshot.queryParams['textoDestaque'];
  }

}
