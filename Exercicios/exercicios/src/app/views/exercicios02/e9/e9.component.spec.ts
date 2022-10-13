import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E9Component } from './e9.component';

describe('E9Component', () => {
  let component: E9Component;
  let fixture: ComponentFixture<E9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
