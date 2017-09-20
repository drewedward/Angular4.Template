import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveModule } from 'ng2-responsive';
import { ResourceOneRoutingModule } from './resource-one-routing.module';
import { ResourceOneComponent } from './resource-one.component';
import { ResourceOneListComponent } from './components/resource-one-list/resource-one-list.component';

@NgModule({
    imports: [
        CommonModule,
        ResponsiveModule,
        ResourceOneRoutingModule
    ],
    declarations: [
        ResourceOneComponent,
        ResourceOneListComponent
    ]
})
export class ResourceOneModule { }