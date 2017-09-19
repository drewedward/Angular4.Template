import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceOneComponent } from './resource-one.component';

const routes: Routes = [
    { path: '', component: ResourceOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceOneRoutingModule { }