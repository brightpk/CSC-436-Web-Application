import { MyServiceService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  like: boolean;
  info: string;

  constructor(private myService: MyServiceService) {}

  ngOnInit() {
  }

  // method when click like button
  onClickLike() {
    this.like = !this.like;
    const text = this.myService.likeImage(this.like);
    $('#text-output').html(text);
  }

}
