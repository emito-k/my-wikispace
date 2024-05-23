import { Component, Input } from '@angular/core';
import { WikiInterface } from '../../models/wiki.interface';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wiki-page-card',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './wiki-page-card.component.html',
  styleUrl: './wiki-page-card.component.css'
})
export class WikiPageCardComponent {
  @Input({ required: true }) wiki!: WikiInterface;

  constructor() {

  }


}
