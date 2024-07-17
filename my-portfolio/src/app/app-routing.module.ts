import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationbarcomponentComponent } from './navigationbarcomponent/navigationbarcomponent.component';


const routes: Routes = [

  {
    path: '', component: NavigationbarcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
