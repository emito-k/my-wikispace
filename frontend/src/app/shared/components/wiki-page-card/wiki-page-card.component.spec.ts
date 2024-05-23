import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiPageCardComponent } from './wiki-page-card.component';

describe('WikiPageCardComponent', () => {
  let component: WikiPageCardComponent;
  let fixture: ComponentFixture<WikiPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiPageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikiPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
