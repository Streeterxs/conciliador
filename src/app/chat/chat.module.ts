import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatNavbarComponent } from './chat-navbar/chat-navbar.component';
import { ChatIntegrantesComponent } from './chat-integrantes/chat-integrantes.component';
import { ChatResumoAcordosComponent } from './chat-resumo-acordos/chat-resumo-acordos.component';
import { ChatMensagensComponent } from './chat-mensagens/chat-mensagens.component';
import { ChatChatBoxComponent } from './chat-chat-box/chat-chat-box.component';
import { MensagemComponent } from './chat-mensagens/mensagem/mensagem.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatNavbarComponent,
    ChatIntegrantesComponent,
    ChatResumoAcordosComponent,
    ChatMensagensComponent,
    ChatChatBoxComponent,
    MensagemComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
