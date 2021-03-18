import { Component, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
    isDarkTheme = true;
    faLinkedin = faLinkedinIn;
    faGithub = faGithub;

    constructor(private elementRef: ElementRef, private router: Router) {}

    downloadResume() {
        if (window.innerWidth <= 800) {
            window.open(
                "../../assets/resume/Nikhil Rajesh - Resume.pdf",
                "_blank"
            );
            this.router.navigate(["/"]);
        }
    }

    ngOnInit(): void {
        this.downloadResume();
        if (
            localStorage.hasOwnProperty("isDarkTheme") &&
            !JSON.parse(localStorage.getItem("isDarkTheme"))
        )
            this.lightTheme();
        else this.darkTheme();
    }

    lightTheme() {
        this.isDarkTheme = false;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
            "#f5f0e1";
    }

    darkTheme() {
        this.isDarkTheme = true;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
            "#222831";
    }
}
