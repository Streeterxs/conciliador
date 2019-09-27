import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() loginForm?: FormGroup

  @Output() loginEmit = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginEmit.emit("");
  }
}
