import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'; 

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // get data from service - hardcoded
    // this.todos = this.todoService.getTodos();

    // get data from service API
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false
    //   }
    // ]
  }

  deleteTodo(todo:Todo) {
    // remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    // create on server
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
