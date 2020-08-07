import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { faGit, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private bottomSheetRef: MatBottomSheetRef<ProjectInfoComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  isDarkTheme: Observable<boolean>;

  faGit = faGitAlt;
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
