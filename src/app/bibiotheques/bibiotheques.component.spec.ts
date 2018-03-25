import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BibiothequesComponent} from './bibiotheques.component';

describe('BibiothequesComponent', () => {
  let component: BibiothequesComponent;
  let fixture: ComponentFixture<BibiothequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BibiothequesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibiothequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
