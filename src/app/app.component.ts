import { Component, HostListener, AfterViewInit, NgZone } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faBars, faTimes, faHome, faPencilAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
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
  faHome = faHome;
  faPencil = faPencilAlt;
  faCode = faCodeBranch;

  constructor(private scrollDispatcher: ScrollDispatcher, private zone: NgZone) {
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

  ngAfterViewInit() {
    this.scrollDispatcher.scrolled().
    subscribe((cdk: CdkScrollable)  => {
    this.zone.run(() => {
    // Here you can add what to happen when scroll changed
    // I want to display the scroll position for example
      AOS.refresh();
    });
    });
  }
}
