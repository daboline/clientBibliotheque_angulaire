import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreerBibliothequeComponent} from './creer-bibliotheque.component';

describe('CreerBibliothequeComponent', () => {
  let component: CreerBibliothequeComponent;
  let fixture: ComponentFixture<CreerBibliothequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreerBibliothequeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
