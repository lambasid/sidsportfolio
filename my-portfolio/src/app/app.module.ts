import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './module/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './navigationbarcomponent/about/about.component';
import { ProjectsComponent } from './navigationbarcomponent/projects/projects.component';
import { ContactComponent } from './navigationbarcomponent/contact/contact.component';
import { NavigationbarcomponentComponent } from './navigationbarcomponent/navigationbarcomponent.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { ResumeComponent } from './navigationbarcomponent/resume/resume.component';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { 
  faJs, faHtml5, faCss3Alt, faAngular, faReact, 
  faNodeJs, faPython, faJava, faPhp, faSwift 
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    NavigationbarcomponentComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faBars, faEnvelope,
      faJs, faHtml5, faCss3Alt, faAngular, faReact,
      faNodeJs, faPython, faJava, faPhp, faSwift);
 }
 
}