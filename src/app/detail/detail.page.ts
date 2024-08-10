import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, TodoService } from '../services/todo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: string|null = ''
  todo:Todo|undefined
  constructor(private route:ActivatedRoute, private todoService:TodoService, private router:Router, private toastController: ToastController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.todo = this.todoService.getById(parseInt(this.id!!));
  }

  async deleteItem(){
    this.todoService.deleteItem(parseInt(this.id!!))
    this.router.navigate(['/'])
    const toast = await this.toastController.create({
      message: 'Item successfully deleted',
      duration: 5000,  
      position: 'top', 
      // color: 'success',  
    });
    toast.present();
  }

}
