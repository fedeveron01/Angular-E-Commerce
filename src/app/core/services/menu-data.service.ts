import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Productos', Icon: 'fa-users', RouterLink: '/main/productos', Childs: null, IsChildVisible: false
            },
       
        
            {
                Label: 'ContactUs', Icon: 'fa-envelope', RouterLink: '/main/contactus', Childs: null, IsChildVisible: false
            },
     
        ];
    }
}