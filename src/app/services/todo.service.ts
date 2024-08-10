import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  place: string;
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  private nextId: number = 1

  constructor() { }

  addItem(todo: Omit<Todo, 'id'>): void {
    this.todos = [...this.todos, {...todo, id: this.nextId }]
    this.nextId++
  }

  getAll(): Todo[] {
    return [...this.todos];
  }

  getById(id:number):Todo|undefined {
    return this.todos.find(val=>val.id === id)
  }

  deleteItem(id:number){
    this.todos = this.todos.filter(val=> val.id !== id)
  }

}
