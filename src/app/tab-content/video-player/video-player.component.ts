import { Component, Input, inject } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  @Input({ required: true })
  id!: string;

  apiLoaded = inject(YoutubeService).apiLoaded;
}
