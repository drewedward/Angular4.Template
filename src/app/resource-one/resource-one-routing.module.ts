import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceOneComponent } from './resource-one.component';
import { ResourceOneListComponent } from './components/resource-one-list/resource-one-list.component';
import { ResourceOneDetailsComponent } from './components/resource-one-details/resource-one-details.component';

const routes: Routes = [
    { path: '', component: ResourceOneComponent },
    // Note: order of which the routes appear affects which route is rendered first
    // https://stackoverflow.com/questions/40495428/angular-2-route-with-url-parameter-conflicts-with-other-routes 
    { path: 'list', component: ResourceOneListComponent },
    { path: ':id', component: ResourceOneDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceOneRoutingModule { }