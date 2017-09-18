import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Injectable()
export class MenuService{
    items: Array<MenuItem>;
}