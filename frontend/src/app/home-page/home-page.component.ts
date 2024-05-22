import { Component } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  WikiSpaces: any;

  constructor(private firebaseService: FirebaseService, private authService: AuthService) {
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

  deleteWikispace(doc_id: string) {
    this.firebaseService.deleteWikispace(doc_id).subscribe(() => {
      console.log('Document deleted');
    });
  }

  updateWikispace(doc_id: string) {
    this.firebaseService.updateWikispace(doc_id, {}).subscribe(() => {
      console.log('Document updated');
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('User logged out');
    });
  }
}
