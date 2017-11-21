import { Component, OnInit } from '@angular/core';
import {PainelModel} from '../model/painel.model';
import {MsgAlertModel} from '../model/msg-alert.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../resource/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  mensagem: MsgAlertModel;
  usuarios: [''];
  painel: PainelModel = new PainelModel(
      'fa fa-list-alt',
      'Listagem de Usuário',
      '/usuario/novo',
      'painel_id_usuarios',
      'Novo Usuário',
      true
  );

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private usuarioservice: UsuarioService) { }

  ngOnInit() {

    this.mensagem = new MsgAlertModel();
    this.getUsuarios();
  }


  getUsuarios(){
    this.usuarioservice.buscarUsuarios().then( response => {
      this.usuarios = response.json();


    }).catch( error => {

    })
  }



  editar(e, usuario){
    e.preventDefault();
    this.router.navigate(['usuario/editar'], {queryParams: usuario});
  }

}
