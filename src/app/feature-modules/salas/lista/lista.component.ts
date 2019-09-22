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
  afonso = new Usuario(
    "afonso",
    "09658266436",
    "afonso@afonso.com",
    false,
    false);
  isis = new Usuario(
    "isis",
    "08307980036",
    "isis@isis.com",
    false,
    true
  );
  salas = [new Sala(
    "Brasil vs Estados Unidos",
    [this.afonso, this.isis],
    new Date(),
    [new Mensagem(
      this.afonso,
      new Date,
      "Vou buscar lá em casa",
      3
    ),
    new Mensagem(
      this.isis,
      new Date,
      "Vou lá com vc pegar na piloca",
      4
    )],
    1
  ), new Sala(
    "Brasil vs Estados Unidos",
    [this.afonso],
    new Date(),
    [new Mensagem(
      this.afonso,
      new Date,
      "Vou buscar lá em casa",
      3
    ),
    new Mensagem(
      this.isis,
      new Date,
      "Vou lá com vc pegar na piloca",
      4
    )],
    2
  ), new Sala(
    "Brasil vs Estados Unidos",
    [this.isis],
    new Date(),
    [new Mensagem(
      this.afonso,
      new Date,
      "Vou buscar lá em casa",
      3
    ),
    new Mensagem(
      this.isis,
      new Date,
      "Vou lá com vc pegar na piloca",
      4
    )],
    3
  ), new Sala(
    "Brasil vs Estados Unidos",
    [this.afonso, this.isis],
    new Date(),
    [new Mensagem(
      this.afonso,
      new Date,
      "Vou buscar lá em casa",
      3
    ),
    new Mensagem(
      this.isis,
      new Date,
      "Vou lá com vc pegar na piloca",
      4
    )],
    4
  ), new Sala(
    "Brasil vs Estados Unidos",
    [],
    new Date(),
    [new Mensagem(
      this.afonso,
      new Date,
      "Vou buscar lá em casa",
      3
    ),
    new Mensagem(
      this.isis,
      new Date,
      "Vou lá com vc pegar na piloca",
      4
    )],
    5
  )]

  constructor() { }

  ngOnInit() {
  }

}
