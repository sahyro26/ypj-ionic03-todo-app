import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  newTodo:Omit<Todo,'id'> = {
    name:'',
    description:'',
    place:'',
    done: false
  }

  constructor(private todoService:TodoService, private router:Router) { }

  ngOnInit() {
  }

  addItem(){
    console.log(this.newTodo)
    this.todoService.addItem(this.newTodo)
    this.router.navigate(['/'])
  }

}
