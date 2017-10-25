import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EmpresaService } from '../resource/empresa.service';
import {PainelModel} from '../model/painel.model';
import {MsgAlertModel} from "../model/msg-alert.model";
import {MsgAlertaService} from "../resource/msg-alerta.service";

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.css']
})
export class EmpresaEditComponent implements OnInit {

  public empresa;
  private id;

  mensagem: MsgAlertModel;

  painel: PainelModel = new PainelModel(

      'pencil-square-o',
      'Editando de Empresa',
      'sem-rota',
      'painel_id_empresa_cadastro',
      'sem-botao',
      false
  );


  constructor(private activatedRoute: ActivatedRoute, private empresaservice: EmpresaService, private router: Router, private msgservice: MsgAlertaService,) {
    this.empresa = {};
    this.id = this.activatedRoute.snapshot.queryParams['id'];
  }
  ngOnInit() {
    this.mensagem = new MsgAlertModel();
    this.carregarEmpresa();

  }

  salvar(e){
    e.preventDefault();
    if(this.empresa){

      this.empresaservice.atualizar(this.empresa).then(response => {

        let msg = this.msgservice.getAlerta(1,'Empresa ' + response.json().razao_social,' atualizada com sucesso.');
        this.router.navigate(['empresa'], {queryParams: msg });

      }).catch(error => {
        console.log(error);
      })

    }

  }


  carregarEmpresa(){
    this.empresaservice.buscarEmpresaPorID(this.id).then( response => {
      this.empresa = response.json();
    }).catch( error => {
      this.mensagem = this.msgservice.getAlerta(2, 'Error ', ' error ao atualizar empresa.');
    })
  }

}
