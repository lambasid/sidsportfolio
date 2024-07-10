import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationbarcomponentComponent } from './navigationbarcomponent.component';
import { RouterTestingModule } from '@angular/router/testing'; // Import if routing is used in the component

describe('NavigationbarcomponentComponent', () => {
  let component: NavigationbarcomponentComponent;
  let fixture: ComponentFixture<NavigationbarcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationbarcomponentComponent ],
      imports: [
        RouterTestingModule // Include this if your component uses routerLink or similar directives
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationbarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebar visibility', () => {
    expect(component.isSidebarOpen).toBeFalse(); // Initial state should be false
    component.toggleSidebar(); // Method to toggle sidebar
    expect(component.isSidebarOpen).toBeTrue(); // Check if sidebar state is toggled
    component.toggleSidebar(); // Toggle again
    expect(component.isSidebarOpen).toBeFalse(); // Check if it toggles back
  });

  // Add more tests for initial input bindings and component's response to changes if applicable
});
