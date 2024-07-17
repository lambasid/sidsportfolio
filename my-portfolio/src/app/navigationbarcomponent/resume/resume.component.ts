import { Component,Input } from '@angular/core';
import {Personal} from '../../interfaceContact';
import resumeData from 'src/assets/data/resume.json';
import {Education, Experience} from '../../interfaceResume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @Input() navContent!: Personal;
  @Input() education: Education[] = resumeData.Education;
  @Input() experience: Experience[] = resumeData.Experience;
}
