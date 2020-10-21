import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsListComponent } from './top-deals-list.component';

describe('TopDealsListComponent', () => {
  let component: TopDealsListComponent;
  let fixture: ComponentFixture<TopDealsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
