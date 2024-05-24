import { Component } from '@angular/core';

@Component({
  selector: 'app-wiki-edit-page',
  standalone: true,
  imports: [],
  templateUrl: './wiki-edit-page.component.html',
  styleUrl: './wiki-edit-page.component.css'
})
export class WikiEditPageComponent {
  counter = 0;

  things = ['thing1', 'thing2', 'thing3'];

  increment() {
    this.counter++;
  }
}
