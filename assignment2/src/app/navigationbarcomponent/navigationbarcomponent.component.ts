import { Component,Input } from '@angular/core';
import {Personal,Projects} from '../interfacePersonalInfo';
import personalInfoData from 'src/assets/data/personalInfo.json';

@Component({
  selector: 'app-navigationbarcomponent',
  templateUrl: './navigationbarcomponent.component.html',
  styleUrls: ['./navigationbarcomponent.component.css']
})
export class NavigationbarcomponentComponent {
  @Input() p: Personal = personalInfoData.PersonalInfo;
  //@Input() proj: Projects[] = personalInfoData.Projects;
}
