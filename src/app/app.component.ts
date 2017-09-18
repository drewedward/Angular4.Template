import { Component } from '@angular/core';
import { initialMenuItems } from './app.menu';
import { MenuService } from '../framework/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private menuService: MenuService){ 
    // initialize menu items in framework 
    menuService.items = initialMenuItems;
  }
}
