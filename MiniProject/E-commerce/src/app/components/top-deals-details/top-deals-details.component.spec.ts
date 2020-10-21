import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsDetailsComponent } from './top-deals-details.component';

describe('TopDealsDetailsComponent', () => {
  let component: TopDealsDetailsComponent;
  let fixture: ComponentFixture<TopDealsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDealsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
