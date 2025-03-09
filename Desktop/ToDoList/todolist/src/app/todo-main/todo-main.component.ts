import { Component } from '@angular/core';


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-main',
  imports: [],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css'
})

export class TodoMainComponent {

  list:Todo[] =[]

}
