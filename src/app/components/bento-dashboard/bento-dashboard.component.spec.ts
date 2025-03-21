import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentoDashboardComponent } from './bento-dashboard.component';

describe('BentoDashboardComponent', () => {
  let component: BentoDashboardComponent;
  let fixture: ComponentFixture<BentoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BentoDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BentoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
