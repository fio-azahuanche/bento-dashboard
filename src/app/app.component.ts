import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BentoDashboardComponent } from './components/bento-dashboard/bento-dashboard.component';
import { FollowersCardComponent } from './components/followers-card/followers-card.component';
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component';
import { HeaderComponent } from './components/header/header.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BentoDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bento-dashboard';
}
