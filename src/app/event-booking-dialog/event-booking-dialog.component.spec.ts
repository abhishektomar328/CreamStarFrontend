import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingDialogComponent } from './event-booking-dialog.component';

describe('EventBookingDialogComponent', () => {
  let component: EventBookingDialogComponent;
  let fixture: ComponentFixture<EventBookingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBookingDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
