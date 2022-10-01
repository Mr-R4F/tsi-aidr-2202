import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo4NgForComponent } from './exemplo4-ng-for.component';

describe('Exemplo4NgForComponent', () => {
  let component: Exemplo4NgForComponent;
  let fixture: ComponentFixture<Exemplo4NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo4NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo4NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
