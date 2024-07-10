import { Component, Input } from '@angular/core';
import {Personal} from '../../interfaceContact';
import projectsData from '../../../assets/data/projects.json';
import contactData from '../../../assets/data/contact.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() navContent: Personal = contactData.PersonalInfo;

}
