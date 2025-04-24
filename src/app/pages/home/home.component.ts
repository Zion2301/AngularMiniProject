import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatListModule, MatIconModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('menu') menuElement!: ElementRef;

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // This listens for all document clicks
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideMenu = this.menuElement?.nativeElement.contains(event.target);
    const clickedMenuIcon = (event.target as HTMLElement).classList.contains('hamburger');

    if (!clickedInsideMenu && !clickedMenuIcon) {
      this.isMenuOpen = false;
    }
  }
}


