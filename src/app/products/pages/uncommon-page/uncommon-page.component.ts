import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Juan', 'Pedro', 'Josefa', 'Andrea', 'Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:',value)
    )
  );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos datos en la promesa.')
    }, 3500)
  })
}
