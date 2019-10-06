import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  removeAllPoints(article: Article) {
    article.votes = 0;
  }
}
