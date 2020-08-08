import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
    isDarkTheme = true;

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        if (
            localStorage.hasOwnProperty("isDarkTheme") &&
            !JSON.parse(localStorage.getItem("isDarkTheme"))
        )
            this.lightTheme();
        else this.darkTheme();
    }

    lightTheme() {
        this.isDarkTheme = false;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#f5f0e1";
    }

    darkTheme() {
        this.isDarkTheme = true;
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#222831";
    }
}
