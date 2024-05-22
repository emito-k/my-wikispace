import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './shared/services/firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  WikiSpaces: any;
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getWikiSpaces().subscribe((data) => {
      this.WikiSpaces = data;
      console.log(this.WikiSpaces);
    });
  }

  createWikispace() {
    this.firebaseService.createWikispace({}).subscribe((data) => {
      console.log(data);
    });
  }
}
