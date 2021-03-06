import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor(private articlesService: ArticlesService) {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3, 'admin'),
      new Article('Fullstack', 'http://fullstack.io', 2, 'admin'),
      new Article('Angular Homepage', 'http://angular.io', 1, 'user')
    ];
    this.articlesService.articles = this.articles;
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0, 'user'));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
