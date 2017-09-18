import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ResponsiveModule } from 'ng2-responsive';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        ResponsiveModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }