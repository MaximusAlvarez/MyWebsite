import { Component, OnInit, AfterViewInit, ElementRef } from "@angular/core";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit, AfterViewInit {
    isDarkTheme: boolean;

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {}

    ngAfterViewInit() {
        if (
            localStorage.hasOwnProperty("isDarkTheme") &&
            JSON.parse(localStorage.getItem("isDarkTheme"))
        ) {
            this.isDarkTheme = true;
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#222831";
            this.elementRef.nativeElement.ownerDocument.body.style.color = "#eeeeee";
        } else {
            this.isDarkTheme = false;
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#f5f0e1";
            this.elementRef.nativeElement.ownerDocument.body.style.color = "#1e3d59";
        }
    }
}
