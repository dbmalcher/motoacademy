import { Component } from '@angular/core';

// todo-list-item.component.ts
@Component({
  selector: 'todo-list-item',
  standalone: true,
  template: `
  <ul>
    <li>(TODO) Read Angular Essentials Guide</li>
  </ul>
  `,
})
export class TodoListItemComponent {
  /* Component behavior is defined in here */
}
