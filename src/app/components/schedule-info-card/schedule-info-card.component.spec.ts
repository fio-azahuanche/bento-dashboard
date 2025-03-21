import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInfoCardComponent } from './schedule-info-card.component';

describe('ScheduleInfoCardComponent', () => {
  let component: ScheduleInfoCardComponent;
  let fixture: ComponentFixture<ScheduleInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
