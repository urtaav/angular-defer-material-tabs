import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [GoogleMapsModule, AsyncPipe],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.scss'
})
export class GoogleMapsComponent {
  httpClient = inject(HttpClient);

  apiLoaded: Observable<boolean> = this.httpClient
    .jsonp('https://maps.googleapis.com/maps/api/js?key=API_KEY', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false))
    );

}
