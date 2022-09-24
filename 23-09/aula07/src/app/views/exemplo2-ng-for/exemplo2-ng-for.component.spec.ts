import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo2NgForComponent } from './exemplo2-ng-for.component';

describe('Exemplo2NgForComponent', () => {
  let component: Exemplo2NgForComponent;
  let fixture: ComponentFixture<Exemplo2NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo2NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo2NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
