import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E12Component } from './e12.component';

describe('E12Component', () => {
  let component: E12Component;
  let fixture: ComponentFixture<E12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
