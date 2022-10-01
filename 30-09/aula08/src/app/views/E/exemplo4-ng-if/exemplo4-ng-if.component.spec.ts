import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo4NgIfComponent } from './exemplo4-ng-if.component';

describe('Exemplo4NgIfComponent', () => {
  let component: Exemplo4NgIfComponent;
  let fixture: ComponentFixture<Exemplo4NgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo4NgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo4NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
