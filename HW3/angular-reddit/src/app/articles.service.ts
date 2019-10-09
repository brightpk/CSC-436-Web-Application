import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Article[];

  constructor() {}

  removeAllPoints(article: Article) {
    let res = 0;
    const votes: number[] = [];
    this.articles.forEach((a => votes.push(a.votes)));
    res = Math.min.apply(null, votes);

    if (article.votes > res) {
      article.votes = res - 1;
    }
  }
}
