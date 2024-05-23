import { Component, Input } from '@angular/core';
import { WikiInterface } from '../../models/wiki.interface';
import { WikiPageCardComponent } from '../wiki-page-card/wiki-page-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-wiki-pages-feed',
  standalone: true,
  imports: [
    WikiPageCardComponent,
    FlexLayoutModule
  ],
  templateUrl: './wiki-pages-feed.component.html',
  styleUrl: './wiki-pages-feed.component.css'
})
export class WikiPagesFeedComponent {
  @Input({ required: true }) wikis!: WikiInterface[];
  @Input({ required: true }) wiki_id!: string;
}
