import { Component,Input } from '@angular/core';
import {Personal} from '../interfaceContent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() navContent!: Personal;
  @Input() themeCheck!:boolean;
}
