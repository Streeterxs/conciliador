import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatNavbarComponent } from './chat-navbar/chat-navbar.component';
import { ChatIntegrantesComponent } from './chat-integrantes/chat-integrantes.component';
import { ChatResumoAcordosComponent } from './chat-resumo-acordos/chat-resumo-acordos.component';
import { ChatMensagensComponent } from './chat-mensagens/chat-mensagens.component';
import { ChatChatBoxComponent } from './chat-chat-box/chat-chat-box.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatNavbarComponent,
    ChatIntegrantesComponent,
    ChatResumoAcordosComponent,
    ChatMensagensComponent,
    ChatChatBoxComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
