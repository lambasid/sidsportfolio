import { Component,Input } from '@angular/core';
import {Personal} from '../../interfaceContent';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @Input() navContent!: Personal;

}
