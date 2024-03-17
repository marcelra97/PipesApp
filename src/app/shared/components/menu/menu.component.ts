import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icons: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Numeros',
                icons: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icons: 'pi pi-globe',
                routerLink: 'uncommon'
              },

            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                routerLink: 'custom'
              }
            ]
          }
        ];
    }

}
