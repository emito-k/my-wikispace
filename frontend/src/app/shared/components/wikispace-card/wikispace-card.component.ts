import { Component, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { WikispaceInterface } from '../../models/wikispace.interface';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-wikispace-card',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './wikispace-card.component.html',
  styleUrl: './wikispace-card.component.css'
})
export class WikispaceCardComponent {
  @Input({ required: true }) wikispace!: WikispaceInterface;
}
