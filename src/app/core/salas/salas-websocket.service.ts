import { Injectable } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
import { Mensagem } from '../../shared/interfaces/mensagem';

@Injectable({
  providedIn: 'root'
})
export class SalasWebsocketService {

  webSocketSubject = webSocket(environment.wsApiLocal);
  path = `${environment.wsApiLocal}/ws/chat/`;

  constructor() { }

  recebeSalaIdERetornaWebsocketSubject(salaId: number, loggedUserCpf: string) {
    const websocketSubject = webSocket(this.path + `${salaId}/`);
    this.checarPermissaoWebsocket(websocketSubject, salaId, loggedUserCpf);
    return websocketSubject;
  }

  recebeWebsocketSubjectEMensagemEEnviaAMensagem(websocketSubject: WebSocketSubject<any>, websocketMessageChat: Mensagem) {
    console.log(websocketMessageChat);
    websocketSubject.next({command: 'new_message', message: websocketMessageChat});
  }

  recebeWebsocketEDesconecta(websocketSubject: WebSocketSubject<any>) {
    websocketSubject.complete();
  }

  checarPermissaoWebsocket(websocketSubject: WebSocketSubject<any>, idSala: number, cpf: string) {
    websocketSubject.next({command: 'check_permission', idSala: idSala, cpf: cpf});
  }

  buscarMensagens(websocketSubject: WebSocketSubject<any>, idSala: number) {
    websocketSubject.next({command: 'fetch_messages', idSala: idSala});
  }
}
