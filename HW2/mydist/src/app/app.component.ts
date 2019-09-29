import { Component } from '@angular/core';
import { Message } from './models/message';
import { MessagesService } from './messages.service';
import { Messages } from './models/messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  newTxt = '';
  messagesService: MessagesService;
  messages = new Messages();

  constructor(messagesService: MessagesService) {
    this.messagesService = messagesService;
    this.messages = messagesService.getAllMessages();
  }

  onSend() {
    const newMsg = new Message();
    newMsg.text = this.newTxt;
    newMsg.timestamp = new Date();
    this.messagesService.addMessage(newMsg);
    this.newTxt = '';
  }

}
