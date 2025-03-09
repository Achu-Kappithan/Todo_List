import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-main',
  imports: [MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,MatCardModule,FormsModule,CommonModule],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css'
})

export class TodoMainComponent {

  list:Todo[] =[]
  task:string ="" 


  addtask() {
    if (this.task.trim()) {
      const newTask: Todo = {
        id: Date.now(), 
        title: this.task.trim(),
        completed: false
      };

      this.list.push(newTask);
      this.task = ''; 
    }
  }

  remove(id:number){
    console.log("working")
    this.list = this.list.filter((val)=>val.id !=id)
  }
}
