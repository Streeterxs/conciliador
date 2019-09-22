import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {
  @Input() cadastroForm?: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  formSubmit(){
    alert("Enviado")
  }

}
