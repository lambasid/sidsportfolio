import { Component, Input } from '@angular/core';
import { Personal, Projects } from './interfacePersonalInfo';
import personalInfoData from '../assets/data/personalInfo.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  @Input() p: Personal = personalInfoData.PersonalInfo;
  @Input() projects: Projects[] = personalInfoData.Projects;

  //for theme checkbox
  themeCheck = false;
  currentTheme: string = "Dark";

}
