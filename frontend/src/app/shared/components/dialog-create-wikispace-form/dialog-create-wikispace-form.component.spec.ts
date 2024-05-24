import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateWikispaceFormComponent } from './dialog-create-wikispace-form.component';

describe('DialogCreateWikispaceFormComponent', () => {
  let component: DialogCreateWikispaceFormComponent;
  let fixture: ComponentFixture<DialogCreateWikispaceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCreateWikispaceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCreateWikispaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
