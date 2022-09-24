import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo3NgIfComponent } from './exemplo3-ng-if.component';

describe('Exemplo3NgIfComponent', () => {
  let component: Exemplo3NgIfComponent;
  let fixture: ComponentFixture<Exemplo3NgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo3NgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo3NgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
