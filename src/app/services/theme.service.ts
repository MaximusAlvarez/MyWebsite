import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable()
export class ThemeService {
    private darkTheme = new BehaviorSubject<boolean>(true);
    isDarkTheme = this.darkTheme.asObservable();

    constructor() {
        if (localStorage.hasOwnProperty("isDarkTheme"))
            this.darkTheme.next(JSON.parse(localStorage.getItem("isDarkTheme")));
    }

    setDarkTheme(isDarkTheme: boolean): void {
        this.darkTheme.next(isDarkTheme);
        localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
    }
}
