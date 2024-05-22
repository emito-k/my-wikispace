import { Component } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { AuthService } from '../shared/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  value: string = '';
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
