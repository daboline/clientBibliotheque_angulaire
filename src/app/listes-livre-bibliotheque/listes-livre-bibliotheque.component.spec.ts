import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListesLivreBibliothequeComponent} from './listes-livre-bibliotheque.component';

describe('ListesLivreBibliothequeComponent', () => {
  let component: ListesLivreBibliothequeComponent;
  let fixture: ComponentFixture<ListesLivreBibliothequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListesLivreBibliothequeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesLivreBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
