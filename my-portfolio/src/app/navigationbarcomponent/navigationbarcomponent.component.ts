import { Component,Input } from '@angular/core';
import {Personal,Projects} from '../interfacePersonalInfo';
import personalInfoData from 'src/assets/data/personalInfo.json';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigationbarcomponent',
  templateUrl: './navigationbarcomponent.component.html',
  styleUrls: ['./navigationbarcomponent.component.css']
})
export class NavigationbarcomponentComponent {
  @Input() p: Personal = personalInfoData.PersonalInfo;
  @Input() projects: Projects[] = personalInfoData.Projects;
}
