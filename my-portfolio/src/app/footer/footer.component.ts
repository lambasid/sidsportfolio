import { Component,Input } from '@angular/core';
import {Personal} from '../interfaceContent';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() navContent!: Personal;
}
