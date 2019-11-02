import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsHistoryComponent } from './claims-history.component';

describe('ClaimsHistoryComponent', () => {
  let component: ClaimsHistoryComponent;
  let fixture: ComponentFixture<ClaimsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
