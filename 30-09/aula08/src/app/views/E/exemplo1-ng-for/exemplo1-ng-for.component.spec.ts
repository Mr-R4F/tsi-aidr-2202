import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo1NgForComponent } from './exemplo1-ng-for.component';

describe('Exemplo1NgForComponent', () => {
  let component: Exemplo1NgForComponent;
  let fixture: ComponentFixture<Exemplo1NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo1NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo1NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
