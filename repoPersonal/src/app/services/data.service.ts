import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'La Chona',
      subject: 'Tucanes de Tijuana',
      date: '3:00 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Cumbia de los pajaritos',
      subject: 'Artista desconocido',
      date: '4:12 AM',
      id: 1,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
