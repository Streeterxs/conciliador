import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChatComponent } from './chat.component';
import { ChatNavbarComponent } from './chat-navbar/chat-navbar.component';
import { ChatIntegrantesComponent } from './chat-integrantes/chat-integrantes.component';
import { ChatResumoAcordosComponent } from './chat-resumo-acordos/chat-resumo-acordos.component';
import { ChatMensagensComponent } from './chat-mensagens/chat-mensagens.component';
import { ChatChatBoxComponent } from './chat-chat-box/chat-chat-box.component';
import { MensagemComponent } from './chat-mensagens/mensagem/mensagem.component';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { MessageModule } from '../../shared/components/message/message.module';
import { ChatRoutingModule } from './chat-routing.module';
import { SortMessagesModule } from './chat-mensagens/sort-messages/sort-messages.module';

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
    ReactiveFormsModule,
    FontAwesomeModule,
    DirectivesModule,
    MessageModule,
    SortMessagesModule
  ]
})
export class ChatModule { }
