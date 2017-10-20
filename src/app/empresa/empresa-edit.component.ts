import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EmpresaService } from '../resource/empresa.service';

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.css']
})
export class EmpresaEditComponent implements OnInit {

  public empresa;
  private id;
  constructor(private activatedRoute: ActivatedRoute, private empresaservice: EmpresaService, private router: Router) {
    this.empresa = {};
    this.id = this.activatedRoute.snapshot.queryParams['id'];
  }
  ngOnInit() {

    this.carregarEmpresa();

  }

  salvar(e){
    e.preventDefault();
    if(this.empresa){

      this.empresaservice.atualizar(this.empresa).then(response => {
        this.router.navigate(['empresa'], {queryParams: response.json() });
      }).catch(error => {
        console.log(error);
      })

    }

  }


  carregarEmpresa(){
    this.empresaservice.buscarEmpresaPorID(this.id).then( response => {
      this.empresa = response.json();
    }).catch( error => {
      // mensagem de error no carregamento da empresa
    })
  }

}
