import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiEditPageComponent } from './wiki-edit-page.component';

describe('WikiEditPageComponent', () => {
  let component: WikiEditPageComponent;
  let fixture: ComponentFixture<WikiEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikiEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
