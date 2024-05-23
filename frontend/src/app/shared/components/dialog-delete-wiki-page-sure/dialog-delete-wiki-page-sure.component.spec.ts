import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteWikiPageSureComponent } from './dialog-delete-wiki-page-sure.component';

describe('DialogDeleteWikiPageSureComponent', () => {
  let component: DialogDeleteWikiPageSureComponent;
  let fixture: ComponentFixture<DialogDeleteWikiPageSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteWikiPageSureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDeleteWikiPageSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
