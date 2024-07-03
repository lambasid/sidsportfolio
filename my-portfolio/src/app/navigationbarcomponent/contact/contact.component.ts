import { Component, Input } from '@angular/core';
import {Personal} from '../../interfaceContent';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() navContent!: Personal;
}
