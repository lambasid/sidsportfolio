import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './navigationbarcomponent/about/about.component';
import { ProjectsComponent } from './navigationbarcomponent/projects/projects.component';
import { ResumeComponent } from './navigationbarcomponent/resume/resume.component';
import { ContactComponent } from './navigationbarcomponent/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
