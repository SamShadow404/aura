import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoairComponent } from './goair.component';

describe('GoairComponent', () => {
  let component: GoairComponent;
  let fixture: ComponentFixture<GoairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
