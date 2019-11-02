import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-chat-box',
  templateUrl: './chat-chat-box.component.html',
  styleUrls: ['./chat-chat-box.component.scss']
})
export class ChatChatBoxComponent implements OnInit {
  @Input() isActive?: boolean = false;

  chatBoxSendForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chatBoxSendForm = this._formBuilder.group({
        chatbox: ['']
    });
  }

  onNgSubmit(event) {
    if (this.isActive) {
      alert('Enviado!');
    } else {
      alert('A mensagem não pôde ser enviada');
    }
  }
}
