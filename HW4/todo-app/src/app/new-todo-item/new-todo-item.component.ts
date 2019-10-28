import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
  newTodo: Todo;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.newTodo = new Todo();
  }

  submit() {
    this.todosService.addTodo(this.newTodo);
  }

}
