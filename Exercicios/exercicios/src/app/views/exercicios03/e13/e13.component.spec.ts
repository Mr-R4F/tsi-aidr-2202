import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E13Component } from './e13.component';

describe('E13Component', () => {
  let component: E13Component;
  let fixture: ComponentFixture<E13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
