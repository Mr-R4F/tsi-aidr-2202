import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo2NgIfComponent } from './exemplo2-ng-if.component';

describe('Exemplo2NgIfComponent', () => {
  let component: Exemplo2NgIfComponent;
  let fixture: ComponentFixture<Exemplo2NgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo2NgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo2NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
