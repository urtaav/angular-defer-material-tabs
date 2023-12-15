import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardViewComponent } from './tab-content/card-view/card-view.component';
import { GoogleMapsComponent } from './tab-content/google-maps/google-maps.component';
import { VideoPlayerComponent } from './tab-content/video-player/video-player.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    CardViewComponent,
    GoogleMapsComponent,
    VideoPlayerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedTabIndex = signal(0);
  prefetchTabs = signal(false);
}
