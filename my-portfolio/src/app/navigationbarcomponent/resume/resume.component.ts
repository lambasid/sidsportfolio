import { Component,Input } from '@angular/core';
import {Personal} from '../../interfaceContact';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @Input() navContent!: Personal;

}
