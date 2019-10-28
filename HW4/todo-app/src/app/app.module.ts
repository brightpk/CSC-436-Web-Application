import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      DashboardComponent,
      TodoItemComponent,
      TodoListComponent,
      NewTodoItemComponent,
      PageNotFoundComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule
      // AngularFireAuthModule, // imports firebase/auth, only needed for auth features
      // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
      // AngularFireStorageModule // imports firebase/storage only needed for storage features
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
