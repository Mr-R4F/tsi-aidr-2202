import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo5NgForComponent } from './exemplo5-ng-for.component';

describe('Exemplo5NgForComponent', () => {
  let component: Exemplo5NgForComponent;
  let fixture: ComponentFixture<Exemplo5NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo5NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo5NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
