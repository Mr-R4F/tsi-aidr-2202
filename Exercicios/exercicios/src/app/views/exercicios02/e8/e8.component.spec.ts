import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E8Component } from './e8.component';

describe('E8Component', () => {
  let component: E8Component;
  let fixture: ComponentFixture<E8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
