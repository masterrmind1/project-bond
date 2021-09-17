import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutantNH3Component } from './pollutant-nh3.component';

describe('PollutantNH3Component', () => {
  let component: PollutantNH3Component;
  let fixture: ComponentFixture<PollutantNH3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutantNH3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutantNH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
