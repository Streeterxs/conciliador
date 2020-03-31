import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { RxStomp } from '@stomp/rx-stomp';
import { Mensagem } from '../../shared/interfaces/mensagem';

@Injectable({
  providedIn: 'root'
})
export class SalasWebsocketService {
  rxStomp = new RxStomp();
  path = `${environment.wsApiLocal}/websocket`;

  constructor() { }

  connect() {
    const stompConfig = {
      // Typically login, passcode and vhost
      // Adjust these for your broker
      /* connectHeaders: {
        login: "guest",
        passcode: "guest"
      }, */

      // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
      brokerURL: this.path,

      // Keep it off for production, it can be quit verbose
      // Skip this key to disable
      debug: function (str) {
        console.log('STOMP: ' + str);
      },

      // If disconnected, it will retry after 200ms
      reconnectDelay: 3000,
    };

    this.rxStomp.configure(stompConfig);
    this.rxStomp.activate();
  }

  watcherMensagensPorSala(idSala) {
    return this.rxStomp.watch(`/topic/public/${idSala}`);
  }

  userJoin(cpf, idSala) {
    const objPublishUserJoin = {
      sender: cpf,
      type: 'JOIN',
      room: idSala
    };
    this.rxStomp.publish({destination: '/app/chat.addUser', body: JSON.stringify(objPublishUserJoin)});
  }

  publishMessage(cpf, mensagem, idSala) {
    const chatMessage = {
      sender: cpf,
      content: mensagem,
      type: 'CHAT',
      room: idSala
    };
    this.rxStomp.publish({destination: '/app/chat.sendMessage', body: JSON.stringify(chatMessage)});
  }
}
