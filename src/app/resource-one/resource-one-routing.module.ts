import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceOneComponent } from './resource-one.component';
import { ResourceOneListComponent } from './components/resource-one-list/resource-one-list.component';

const routes: Routes = [
    { path: '', component: ResourceOneComponent },
    { path: 'resource-one-list', component: ResourceOneListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceOneRoutingModule { }