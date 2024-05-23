import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCreateWikispaceFormComponent } from './shared/components/dialog-create-wikispace-form/dialog-create-wikispace-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from './shared/services/firebase.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  aS?: AuthService;
  check: boolean = false;
  current_wiki_id: string = '';

  constructor(public authService: AuthService, private dialog: MatDialog, private router: Router, private firebaseService: FirebaseService) {
    this.aS = authService;

    this.router.events.subscribe((val) => {
      if (this.router.url.includes('/wiki/')) {
        this.check = true;
        this.current_wiki_id = this.router.url.split('/wiki/')[1];
      }
      else {
        this.check = false;
      }
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.user$.subscribe((user) => {
      if (user) {
        console.log('User logged in: ', user);
        this.authService.currentUserSig.set({
          uid: user.uid,
          email: user.email!,
          username: user.displayName!
        });
      } else {
        this.authService.currentUserSig.set(null);
      }

      console.log(this.authService.currentUserSig());
    });
  }

  openCreateWikispaceDialog() {
    console.log('Opening create wikispace dialog');
    const dialogRef = this.dialog.open(DialogCreateWikispaceFormComponent, {
      width: '250px',
    });
  }

  createWikiPage() {
    this.firebaseService.createWiki(this.current_wiki_id, {
      title: 'New Wiki Page',
      content: 'This is a new wiki page'
    }).subscribe(() => {
      console.log('Document created');
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('User logged out');
    });
  }

}
