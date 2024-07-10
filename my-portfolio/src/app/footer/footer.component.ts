import { Component,Input } from '@angular/core';
import {Personal} from '../interfaceContact';
import projectsData from '../../assets/data/projects.json';
import contactData from '../../assets/data/contact.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() navContent: Personal = contactData.PersonalInfo;
}
