import { Component } from '@angular/core';
import {TodoListItemComponent} from '../todo-list-item/todo-list-item.component';

@Component({
  standalone: true,
  imports: [TodoListItemComponent],
  template: `
    <ul>
      <todo-list-item></todo-list-item>
    </ul>
  `,
})
export class TodoList {}
