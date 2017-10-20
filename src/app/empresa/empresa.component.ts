import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../resource/empresa.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas: [''];
  public razao_social;

  constructor(private empresaservice: EmpresaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEmpresas();

    this.razao_social = this.activatedRoute.snapshot.queryParams['razao_social'];
  }

  getEmpresas(){
    this.empresaservice.buscarEmpresas().then( response => {
      this.empresas = response.json();
    }).catch( error => {

    })
  }

  editar(e, empresa){
    e.preventDefault();
    this.router.navigate(['empresa/editar'], {queryParams: empresa});
  }

}
