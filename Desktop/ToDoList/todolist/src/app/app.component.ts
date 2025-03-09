import { Component } from '@angular/core';
import { TodoMainComponent } from './todo-main/todo-main.component';

@Component({
  selector: 'app-root',
  imports: [TodoMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
   name = "amal"
}
