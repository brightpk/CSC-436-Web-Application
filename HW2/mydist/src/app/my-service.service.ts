import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  likeImage(like: boolean): string {
    return 'Image is liked == ' + like.toString();
  }
}
