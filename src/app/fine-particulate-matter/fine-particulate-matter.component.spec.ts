import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineParticulateMatterComponent } from './fine-particulate-matter.component';

describe('FineParticulateMatterComponent', () => {
  let component: FineParticulateMatterComponent;
  let fixture: ComponentFixture<FineParticulateMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineParticulateMatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FineParticulateMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
