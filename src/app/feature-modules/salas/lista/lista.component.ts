import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/interfaces/usuario';
import { Sala } from 'src/app/shared/interfaces/sala';
import { Mensagem } from 'src/app/shared/interfaces/mensagem';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  afonso: Usuario = {
    name: "afonso",
    cpf: "09658266436",
    email: "afonso@afonso.com",
    is_admin: false,
    is_moderador: false};
  isis: Usuario = {
    name: "isis",
    cpf: "08307980036",
    email: "isis@isis.com",
    is_admin: false,
    is_moderador: true
  };
  salas: Sala[] = [{
    id: 1,
    descricao: "Brasil vs Estados Unidos",
    usuarios: [this.afonso, this.isis],
    data: new Date(),
    mensagens: [{
      id: 3,
      usuario: this.afonso,
      data: new Date,
      mensagens: "Vou buscar lá em casa"
    },
    {
      id: 4,
      usuario: this.isis,
      data: new Date,
      mensagens: "Vou lá com vc pegar na piloca"
    }]
  }, {
    id: 2,
    descricao: "Brasil vs Estados Unidos",
    usuarios: [this.afonso, this.isis],
    data: new Date(),
    mensagens: [{
      id: 3,
      usuario: this.afonso,
      data: new Date,
      mensagens: "Vou buscar lá em casa"
    },
    {
      id: 4,
      usuario: this.isis,
      data: new Date,
      mensagens: "Vou lá com vc pegar na piloca"
    }]
  }, {
    id: 3,
    descricao: "Brasil vs Estados Unidos",
    usuarios: [this.afonso, this.isis],
    data: new Date(),
    mensagens: [{
      id: 3,
      usuario: this.afonso,
      data: new Date,
      mensagens: "Vou buscar lá em casa"
    },
    {
      id: 4,
      usuario: this.isis,
      data: new Date,
      mensagens: "Vou lá com vc pegar na piloca"
    }]
  }, {
    id: 4,
    descricao: "Brasil vs Estados Unidos",
    usuarios: [this.afonso, this.isis],
    data: new Date(),
    mensagens: [{
      id: 3,
      usuario: this.afonso,
      data: new Date,
      mensagens: "Vou buscar lá em casa"
    },
    {
      id: 4,
      usuario: this.isis,
      data: new Date,
      mensagens: "Vou lá com vc pegar na piloca"
    }]
  }, {
    id: 5,
    descricao: "Brasil vs Estados Unidos",
    usuarios: [this.afonso, this.isis],
    data: new Date(),
    mensagens: [{
      id: 3,
      usuario: this.afonso,
      data: new Date,
      mensagens: "Vou buscar lá em casa"
    },
    {
      id: 4,
      usuario: this.isis,
      data: new Date,
      mensagens: "Vou lá com vc pegar na piloca"
    }]
  }]

  constructor() { }

  ngOnInit() {
  }

}
