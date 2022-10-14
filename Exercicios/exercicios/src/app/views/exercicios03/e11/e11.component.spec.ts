import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E11Component } from './e11.component';

describe('E11Component', () => {
  let component: E11Component;
  let fixture: ComponentFixture<E11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
