import { Component, Input } from '@angular/core';
import { Projects } from '../../interfaceProjects';
import projectsData from '../../../assets/data/projects.json';
import contactData from '../../../assets/data/contact.json';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() navProjects: Projects[] = projectsData.Projects;
  faTerminal = faTerminal;
}
