import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:String;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    if (todo.title != null) {
      this.addTodo.emit(todo);
      this.title = null;
    } else {
      console.log('Operation couldn\'t be completed')
    }

    
  }

}
