import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditBibliothequeComponent} from './edit-bibliotheque.component';

describe('EditBibliothequeComponent', () => {
  let component: EditBibliothequeComponent;
  let fixture: ComponentFixture<EditBibliothequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditBibliothequeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
