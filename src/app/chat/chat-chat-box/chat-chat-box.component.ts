import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-chat-box',
  templateUrl: './chat-chat-box.component.html',
  styleUrls: ['./chat-chat-box.component.scss']
})
export class ChatChatBoxComponent implements OnInit {

  chatBoxSendForm: FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chatBoxSendForm = this._formBuilder.group({
        chatbox: ['']
    })
  }

  onNgSubmit(event){
    console.log(event)
  }
}
