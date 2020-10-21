import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingMachineDetailsComponent } from './washing-machine-details.component';

describe('WashingMachineDetailsComponent', () => {
  let component: WashingMachineDetailsComponent;
  let fixture: ComponentFixture<WashingMachineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingMachineDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingMachineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
