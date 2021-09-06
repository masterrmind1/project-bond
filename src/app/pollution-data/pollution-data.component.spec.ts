import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionDataComponent } from './pollution-data.component';

describe('PollutionDataComponent', () => {
  let component: PollutionDataComponent;
  let fixture: ComponentFixture<PollutionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
