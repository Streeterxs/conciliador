import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Mensagem } from '../../../shared/interfaces/mensagem';
import { User } from '../../../core/user/user';

@Component({
  selector: 'app-chat-chat-box',
  templateUrl: './chat-chat-box.component.html',
  styleUrls: ['./chat-chat-box.component.scss']
})
export class ChatChatBoxComponent implements OnInit {
  @Input() isActive?: boolean = false;
  @Input() loggedUser?: User;

  chatBoxSendForm: FormGroup;

  @Output() emitirNovaMensagem: EventEmitter<Mensagem> = new EventEmitter();
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chatBoxSendForm = this.createChatBoxForm();
  }

  createChatBoxForm() {
    return this._formBuilder.group({
      owner: this.loggedUser.id,
      texto: ['']
    });
  }

  onNgSubmit(event) {
    if (this.isActive) {
      this.emitirNovaMensagem.emit(this.chatBoxSendForm.value);
      this.chatBoxSendForm.controls.texto.reset();
    } else {
      alert('A mensagem não pôde ser enviada');
    }
  }
}
