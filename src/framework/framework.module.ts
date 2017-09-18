import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResponsiveConfig, ResponsiveModule } from "ng2-responsive";

import { FrameworkBodyComponent } from "./framework-body/framework-body.component";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menus/menu/menu.component";

let config = {
    breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
    },
    debounceTime: 100 // allow to debounce checking timer
};

export function ResponsiveDefinition() {
    return new ResponsiveConfig(config);
};

@NgModule({
    imports: [
        CommonModule,
        ResponsiveModule
    ],
    declarations: [
        FrameworkBodyComponent,
        ContentComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent
    ],
    providers: [
        {
            provide: ResponsiveConfig,
            useFactory: ResponsiveDefinition
        }
    ],
    exports: [
        FrameworkBodyComponent,
        ResponsiveModule
    ]
})

export class FrameworkModule { }