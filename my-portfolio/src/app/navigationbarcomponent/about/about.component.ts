import { Component,Input } from '@angular/core';
import {Personal} from '../../interfaceContent';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() navContent!: Personal;
}
