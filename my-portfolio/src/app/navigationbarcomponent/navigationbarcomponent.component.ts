import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Personal } from '../interfaceContact';
import { Projects } from '../interfaceProjects';
import projectsData from '../../assets/data/projects.json';
import contactData from '../../assets/data/contact.json';

@Component({
  selector: 'app-navigationbarcomponent',
  templateUrl: './navigationbarcomponent.component.html',
  styleUrls: ['./navigationbarcomponent.component.css']
})
export class NavigationbarcomponentComponent {
  @Input() navContent: Personal = contactData.PersonalInfo;
  @Input() navProjects: Projects[] = projectsData.Projects;
  isSidebarOpen = false;  // Property to track sidebar open or closed

  constructor(private cdr: ChangeDetectorRef) {}

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.cdr.detectChanges();  // Force change detection
  }
}