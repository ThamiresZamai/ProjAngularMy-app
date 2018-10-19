import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoaModel';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa;
  pessoas: Array<Pessoa>;
  sexos: Array<string>;

  constructor(private service: PessoaService) { 
    
  }

  ngOnInit() {
    this.id= 0;
    this.pessoa = new Pessoa();
    this.pessoas = new Array();
    this.sexos = ["masculino","feminino"];
    this.service.getPessoas().subscribe(pessoas => this.pessoas = pessoas)
  }

  salvar(){
    if(this.pessoa.id){
      let posicoa = this.pessoas.findIndex(pessoa => pessoa.id == this.pessoa.id);
      this.pessoas[posicoa] = this.pessoa;
      this.pessoa = new Pessoa();

    }else{
      this.pessoa.id = ++this.id;
      this.pessoas.push(this.pessoa);
      this.pessoa = new Pessoa();
    }
  }

  alterar(al : Pessoa){
    this.pessoa = Object.create(al);
  }

  excluir(ex : Pessoa){
    this.pessoas.splice(ex.id-1,1);
  }

 

}
