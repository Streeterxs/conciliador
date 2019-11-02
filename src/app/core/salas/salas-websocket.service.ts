import { Injectable } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalasWebsocketService {

  webSocketSubject = webSocket(environment.wsApiLocal);
  path = `${environment.wsApiLocal}/ws/chat/`;

  constructor() { }

  recebeSalaIdERetornaWebsocketSubject(salaId: number) {
    return webSocket(this.path + `${salaId}/`);
  }

  recebeWebsocketSubjectEMensagemEEnviaAMensagem(websocketSubject: WebSocketSubject<any>, websocketMessageChat) {
    websocketSubject.next(JSON.stringify(websocketMessageChat));
  }

  recebeWebsocketEDesconecta(websocketSubject: WebSocketSubject<any>) {
    websocketSubject.complete();
  }
}
