import { Component } from '@angular/core';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { HeaderComponent } from '../header/header.component';
import { ScheduleCardComponent } from '../schedule-card/schedule-card.component';
import { FollowersCardComponent } from '../followers-card/followers-card.component';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ChatCardComponent } from '../chat-card/chat-card.component';
import { GrowthCardComponent } from '../growth-card/growth-card.component';
import { ScheduleInfoCardComponent } from '../schedule-info-card/schedule-info-card.component';

@Component({
  selector: 'app-bento-dashboard',
  imports: [
    FollowersCardComponent, 
    ScheduleCardComponent, 
    HeaderComponent, 
    StatsCardComponent,
    ContentCardComponent,
    ChatCardComponent,
    ScheduleInfoCardComponent,
    GrowthCardComponent
  ],
  templateUrl: './bento-dashboard.component.html',
  styleUrl: './bento-dashboard.component.css'
})
export class BentoDashboardComponent {

}
