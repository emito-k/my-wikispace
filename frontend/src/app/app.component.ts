import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCreateWikispaceFormComponent } from './shared/components/dialog-create-wikispace-form/dialog-create-wikispace-form.component';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(public authService: AuthService, private dialog: MatDialog) {
    this.aS = authService;
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

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('User logged out');
    });
  }
}
