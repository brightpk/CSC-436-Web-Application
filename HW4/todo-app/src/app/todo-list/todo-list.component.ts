import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.model';
import { map } from 'rxjs/operators';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(private todosService: TodosService) {
    // console.log(this.todoList.valueChanges().subscribe(res => console.log(res)));
  }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todosService.getTodoList().snapshotChanges()
    .pipe(map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(todos => {
      this.todoList = todos;
    });
  }

}
