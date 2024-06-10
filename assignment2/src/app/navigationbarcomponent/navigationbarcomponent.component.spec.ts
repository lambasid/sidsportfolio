import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationbarcomponentComponent } from './navigationbarcomponent.component';

describe('NavigationbarcomponentComponent', () => {
  let component: NavigationbarcomponentComponent;
  let fixture: ComponentFixture<NavigationbarcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationbarcomponentComponent]
    });
    fixture = TestBed.createComponent(NavigationbarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
