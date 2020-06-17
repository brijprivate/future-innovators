import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalaryComponent } from './galary/galary.component';


const routes: Routes = [
  {path:'galary', component:GalaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
