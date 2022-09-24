import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo3NgForComponent } from './exemplo3-ng-for.component';

describe('Exemplo3NgForComponent', () => {
  let component: Exemplo3NgForComponent;
  let fixture: ComponentFixture<Exemplo3NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo3NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo3NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
