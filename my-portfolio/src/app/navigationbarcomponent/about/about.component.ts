import { Component,Input } from '@angular/core';
import {Personal} from '../../interfacePersonalInfo';
import personalInfoData from 'src/assets/data/personalInfo.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() personal: Personal = personalInfoData.PersonalInfo;
}
