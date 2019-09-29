import { Injectable } from '@angular/core';
import { Message } from './models/message';
import { Messages } from './models/messages';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Messages;
  message: Message;
  user: User;

  constructor() {
    this.messages = new Messages();
    this.message = new Message();
    this.user = new User();
  }

  getAllMessages(): Messages {
    return this.messages;
  }

  addMessage(message: Message): void {
    this.messages.messagesList.push(message);
  }

}
