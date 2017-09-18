import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FrameworkBodyComponent } from "./framework-body/framework-body.component";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menus/menu/menu.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        FrameworkBodyComponent,
        ContentComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent
    ],
    providers: [],
    exports: [
        FrameworkBodyComponent
    ]
})
export class FrameworkModule { }