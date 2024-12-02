import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const toolbar = document.querySelector('.custom-toolbar') as HTMLElement;
    const toolbarBottom = document.querySelector('.custom-toolbar-bottom') as HTMLElement;

    if (currentScroll > this.lastScrollTop) {
      // Scroll down
      toolbar.style.top = '-50px';
      toolbarBottom.style.top = '0';
    } else {
      // Scroll up
      toolbar.style.top = '0';
      toolbarBottom.style.top = '50px';
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }
}
