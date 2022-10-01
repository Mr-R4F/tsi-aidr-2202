import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo3NgSwitchComponent } from './exemplo3-ng-switch.component';

describe('Exemplo3NgSwitchComponent', () => {
  let component: Exemplo3NgSwitchComponent;
  let fixture: ComponentFixture<Exemplo3NgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo3NgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo3NgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
