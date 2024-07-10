import { Component, Input } from '@angular/core';
import {Personal} from './interfaceContact';
import {Projects} from './interfaceProjects';
import {Education, Experience} from './interfaceResume';
import projectsData from '../assets/data/projects.json';
import contactData from '../assets/data/contact.json';
import resumeData from '../assets/data/resume.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  @Input() content: Personal = contactData.PersonalInfo;
  @Input() projects: Projects[] = projectsData.Projects;
  @Input() education: Education[] = resumeData.Education;
  @Input() experience: Experience[] = resumeData.Experience;
  
}