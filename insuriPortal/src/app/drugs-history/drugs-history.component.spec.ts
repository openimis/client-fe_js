import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsHistoryComponent } from './drugs-history.component';

describe('DrugsHistoryComponent', () => {
  let component: DrugsHistoryComponent;
  let fixture: ComponentFixture<DrugsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
