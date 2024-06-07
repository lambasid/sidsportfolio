import { Component,Input } from '@angular/core';
import {Personal, Projects, WorkExperience} from './interfacePersonalInfo.ts';
import personalInfoData from '../assets/data/personalInfo.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  personal: Personal = personalInfoData.Personal;
  projects: Projects[] = personalInfoData.Projects;
  workExperience: WorkExperience[] = personalInfoData.Work_Experience;
}
