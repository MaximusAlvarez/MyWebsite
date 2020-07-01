import { Component, HostListener } from '@angular/core';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nikhilr';
  smallScreen = true;
  spin = 0;
  cols = 4;

  faBars = faBars;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedIn = faLinkedinIn;
  faPhone = faPhone;
  faTimes = faTimes;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth <= 800) {
      this.smallScreen = true;
      this.cols = 6;
    } else {
      this.smallScreen = false;
      this.cols = 4;
    }
  }
}
