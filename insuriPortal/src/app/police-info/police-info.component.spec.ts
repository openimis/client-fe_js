import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceInfoComponent } from './police-info.component';

describe('PoliceInfoComponent', () => {
  let component: PoliceInfoComponent;
  let fixture: ComponentFixture<PoliceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
