import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiPagesFeedComponent } from './wiki-pages-feed.component';

describe('WikiPagesFeedComponent', () => {
  let component: WikiPagesFeedComponent;
  let fixture: ComponentFixture<WikiPagesFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiPagesFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikiPagesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
