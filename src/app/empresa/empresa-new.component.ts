import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../resource/empresa.service';

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

  constructor(private empresaservice: EmpresaService) { }

  ngOnInit() {
  }

  cadastrar(e){

   e.preventDefault();

   this.empresaservice.salvar(this.empresa)
       .then( response => {
         console.log('componente');
         console.log(response);

   }).catch(error => {

     console.log(error);
   });
  }

}
