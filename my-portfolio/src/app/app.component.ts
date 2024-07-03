import { Component, Input } from '@angular/core';
//import { Personal, Projects } from './interfacePersonalInfo';
//import personalInfoData from '../assets/data/personalInfo.json';
import {Personal} from './interfaceContent';
import {Projects} from './interfaceProjects';
import projectsData from '../assets/data/projects.json';
import contentData from '../assets/data/content.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  @Input() content: Personal = contentData.PersonalInfo;
  @Input() projects: Projects[] = projectsData.Projects;


}