import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewPage } from './day-view.page';

describe('DayViewPage', () => {
  let component: DayViewPage;
  let fixture: ComponentFixture<DayViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
