import { Component, Input } from '@angular/core';
import {Personal} from '../interfacePersonalInfo';
import personalInfoData from 'src/assets/data/personalInfo.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() personal: Personal = personalInfoData.PersonalInfo;

}
