import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoList: Todo[];

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  updateTodo(event, todo) {
    const due = event.target.value;
    this.todosService.updateTodo(todo.key, {dueDate: due})
    .catch(err => console.log(err));

  }

  deleteTodo(todo) {
    this.todosService.deleteTodo(todo.key)
    .catch(err => console.log(err));

  }

}
