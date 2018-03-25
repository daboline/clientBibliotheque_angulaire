import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreerBibliov2Component} from './creer-bibliov2.component';

describe('CreerBibliov2Component', () => {
  let component: CreerBibliov2Component;
  let fixture: ComponentFixture<CreerBibliov2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreerBibliov2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerBibliov2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
