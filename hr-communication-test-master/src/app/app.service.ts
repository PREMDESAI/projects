import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription'

@Injectable()
export class AppService {

  constructor() { }

  messages: any[] = [];
  

  private messagesEvent = new Subject<any>();

  messages$ = this.messagesEvent.asObservable();

  setMessage(message: string) {
    this.messages.push({id: this.messages.length + 1, message: message});
    this.messagesEvent.next(this.messages);
  }

  deleteMessage(delId: number) {
    this.messages = this.messages.filter(msg => msg.id !== delId);
    this.messagesEvent.next(this.messages);
  }

}
