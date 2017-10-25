import {Component, EventEmitter, OnInit} from '@angular/core';
import {EmpresaService} from '../resource/empresa.service';
import {PainelModel} from '../model/painel.model';
import {MsgAlertModel} from '../model/msg-alert.model';
import {MsgAlertaService} from '../resource/msg-alerta.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empresa-new',
  templateUrl: './empresa-new.component.html',
  styleUrls: ['./empresa-new.component.css']
})
export class EmpresaNewComponent implements OnInit {



  public empresa = {
    razao_social: '',
    nome_fantasia: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    email: ''
  };

    mensagem: MsgAlertModel;

    painel: PainelModel = new PainelModel(

        'address-card-o',
        'Cadastro de Empresa',
        'sem-rota',
        'painel_id_empresa_cadastro',
        'sem-botao',
        false
    );



  constructor(
        private empresaservice: EmpresaService,
        private msgservice: MsgAlertaService,
        private router: Router
  ) {

  }

  ngOnInit() {
      this.mensagem = new MsgAlertModel();
  }

  cadastrar(e){

   e.preventDefault();

   this.empresaservice.salvar(this.empresa)
       .then( response => {
          let msg = this.msgservice.getAlerta(1,'Empresa ' + response.json().razao_social,' cadastrada com sucesso.');
          this.router.navigate(['empresa'], {queryParams: msg });


   }).catch(error => {

       this.mensagem = this.msgservice.getAlerta(2, 'Error ', ' error ao cadastra empresa.');
   });
  }

}
