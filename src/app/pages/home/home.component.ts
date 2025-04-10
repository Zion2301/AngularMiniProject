import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatListModule, MatIconModule,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  isMenuOpen: boolean = false; // To track whether the menu is open or closed

  ngAfterViewInit() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.muted = true; // Force mute on load
    }
  }

  // Function to toggle the sliding menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Change the menu's state (open/close)
  }
}

