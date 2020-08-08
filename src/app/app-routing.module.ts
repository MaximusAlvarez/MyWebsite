import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { BlogComponent } from "./blog/blog.component";
import { RedpwnCTF2020Component } from "./blog-entries/redpwn-ctf2020/redpwn-ctf2020.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "blog", component: BlogComponent },
    {
        path: "resume",
        children: [
            {
                path: "",
                component: ResumeComponent,
                outlet: "resume"
            }
        ]
    },
    { path: "blog/redpwnCTF-2020", component: RedpwnCTF2020Component },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
