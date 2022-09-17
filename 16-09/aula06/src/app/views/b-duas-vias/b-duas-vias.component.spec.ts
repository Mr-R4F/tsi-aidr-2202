import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDuasViasComponent } from './b-duas-vias.component';

describe('BDuasViasComponent', () => {
  let component: BDuasViasComponent;
  let fixture: ComponentFixture<BDuasViasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDuasViasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BDuasViasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
