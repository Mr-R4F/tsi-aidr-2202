import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo2NgSwitchComponent } from './exemplo2-ng-switch.component';

describe('Exemplo2NgSwitchComponent', () => {
  let component: Exemplo2NgSwitchComponent;
  let fixture: ComponentFixture<Exemplo2NgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo2NgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo2NgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
