import { Component,Input } from '@angular/core';
//import {Personal,Projects} from '../interfacePersonalInfo';
import {Personal} from '../interfaceContent';
import {Projects} from '../interfaceProjects';


@Component({
  selector: 'app-navigationbarcomponent',
  templateUrl: './navigationbarcomponent.component.html',
  styleUrls: ['./navigationbarcomponent.component.css']
})
export class NavigationbarcomponentComponent {
  @Input() navContent!: Personal;
  @Input() navProjects!: Projects[];
}
