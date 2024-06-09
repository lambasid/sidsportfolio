import { Component,Input } from '@angular/core';
import {Personal} from '../interfacePersonalInfo';
import personalInfoData from 'src/assets/data/personalInfo.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() personal: Personal = personalInfoData.PersonalInfo;
}
