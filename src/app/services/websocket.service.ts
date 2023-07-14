import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) {}

  sendOffer(payload: { user: string, offer: number }) {
    this.socket.emit('Nueva oferta', payload)
  }

  getOffer() {
    return this.socket.fromEvent<{ user: string, offer: number }>('Nueva oferta');
  }
}
