import { Component, HostListener, AfterViewInit, NgZone, OnInit } from "@angular/core";
import { ScrollDispatcher } from "@angular/cdk/scrolling";
import { CdkScrollable } from "@angular/cdk/scrolling";
import { faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faPhone,
    faSun,
    faMoon,
    faEnvelope,
    faBars,
    faTimes,
    faHome,
    faPencilAlt,
    faCodeBranch,
    faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import * as AOS from "aos";
import { Observable } from "rxjs";
import { ThemeService } from "./services/theme.service";
import { Router, NavigationStart, Event } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnInit {
    title = "nikhilr";
    smallScreen = true;
    spin = 0;
    cols = 4;

    isDarkTheme: Observable<boolean>;
    resume: boolean;

    faText = faFilePdf;
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
    faSun = faSun;
    faMoon = faMoon;

    constructor(
        private themeService: ThemeService,
        private scrollDispatcher: ScrollDispatcher,
        private zone: NgZone,
        private router: Router
    ) {
        this.onResize();
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.resume = event.url === "/resume";
            }
        });
    }

    @HostListener("window:resize", ["$event"])
    onResize(event?) {
        if (window.innerWidth <= 800) {
            this.smallScreen = true;
            this.cols = 6;
        } else {
            this.smallScreen = false;
            this.cols = 4;
        }
    }

    toggleTheme(checked: boolean) {
        this.themeService.setDarkTheme(checked);
        console.log("asdf");
    }

    ngAfterViewInit() {
        this.scrollDispatcher.scrolled().subscribe((cdk: CdkScrollable) => {
            this.zone.run(() => {
                // Here you can add what to happen when scroll changed
                // I want to display the scroll position for example
                AOS.refresh();
            });
        });
    }

    ngOnInit() {
        this.isDarkTheme = this.themeService.isDarkTheme;
    }
}
