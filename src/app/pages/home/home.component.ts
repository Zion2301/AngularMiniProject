import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngAfterViewInit() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.muted = true; // Force mute on load
    }
  }
}
