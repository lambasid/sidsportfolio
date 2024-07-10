import { Component,Input } from '@angular/core';
import {Personal} from '../interfaceContact';
import projectsData from '../../assets/data/projects.json';
import contactData from '../../assets/data/contact.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() themeCheck!:boolean;
  @Input() navContent: Personal = contactData.PersonalInfo;
  
}

