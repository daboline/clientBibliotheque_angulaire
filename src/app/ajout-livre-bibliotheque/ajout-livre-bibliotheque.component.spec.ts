import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AjoutLivreBibliothequeComponent} from './ajout-livre-bibliotheque.component';

describe('AjoutLivreBibliothequeComponent', () => {
  let component: AjoutLivreBibliothequeComponent;
  let fixture: ComponentFixture<AjoutLivreBibliothequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutLivreBibliothequeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLivreBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
