import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveModule } from 'ng2-responsive';
import { ResourceOneRoutingModule } from './resource-one-routing.module';
import { ResourceOneComponent } from './resource-one.component';

@NgModule({
    imports: [
        CommonModule,
        ResponsiveModule,
        ResourceOneRoutingModule
    ],
    declarations: [
        ResourceOneComponent
    ]
})
export class ResourceOneModule { }