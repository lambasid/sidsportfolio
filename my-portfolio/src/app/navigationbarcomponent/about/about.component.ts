import { Component,Input } from '@angular/core';
import {Personal} from '../../interfaceContact';
import projectsData from '../../../assets/data/projects.json';
import contactData from '../../../assets/data/contact.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() navContent: Personal = contactData.PersonalInfo;
  

}
