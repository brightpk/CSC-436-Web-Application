import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private dbPath = 'todos';
  todoDatabase: AngularFireList<Todo>;

  constructor(private db: AngularFireDatabase) {
    this.todoDatabase = db.list(this.dbPath);
  }

  addTodo(todo: Todo): void {
    this.todoDatabase.push(todo);
  }

  updateTodo(key: string, value: any): Promise<void> {
    return this.todoDatabase.update(key, value);
  }

  deleteTodo(key: string): Promise<void> {
    return this.todoDatabase.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.todoDatabase.remove();
  }

  getTodoList(): AngularFireList<Todo> {
    return this.todoDatabase;
  }


}
