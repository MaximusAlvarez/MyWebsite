import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 3rd Party Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxTypedJsModule } from 'ngx-typed-js';
// Material Modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
// User Defined Modules
import { AppRoutingModule } from './app-routing.module';
// Component Declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { BlogComponent } from './blog/blog.component';
import { RedpwnCTF2020Component } from './blog-entries/redpwn-ctf2020/redpwn-ctf2020.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightService } from './blog-entries/highlight.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectInfoComponent,
    BlogComponent,
    RedpwnCTF2020Component,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatChipsModule,
  ],
  entryComponents: [ProjectInfoComponent],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
