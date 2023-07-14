import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styles: [],
})
export class OfferListComponent implements OnInit, OnDestroy {
  events: any[] = [];
  constructor(private websocket: WebsocketService, private socket: Socket) {}

  ngOnInit() {
    this.socket.emit('joinRoom', 'subasta'); // Unirse a una sala específica

    this.socket.on('event', (data: any) => {
      console.log('Evento recibido:', data);
      this.events.push(data); // Agregar evento a la lista de eventos
    });
  }

  ngOnDestroy(): void {
    this.socket.emit('leaveRoom', 'subasta');
  }
}
