import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  todos: Todo[] = [

    new Todo('test', true),
    new Todo('Lorem Ipsum')
  
  ]

  constructor() { }

  getAllTodo() {
    return this.todos
  }


  addTodo(todo : Todo) {
    this.todos.push(todo)
  }

  
  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }
  
}




}
