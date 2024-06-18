import { Component,Input } from '@angular/core';
import {Personal} from '../interfacePersonalInfo';
import personalInfoData from 'src/assets/data/personalInfo.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() personal: Personal = personalInfoData.PersonalInfo;
}
