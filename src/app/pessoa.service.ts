import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa/pessoaModel';
import { HttpClient } from '@angular/common/http';

const URL:string = 'http://localhost:8080/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  
  constructor(private http : HttpClient) { }

  getPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL);
  }
}
