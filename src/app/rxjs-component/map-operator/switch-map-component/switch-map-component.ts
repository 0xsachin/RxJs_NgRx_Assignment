import { Component } from '@angular/core';
import { Observable, of, switchMap,delay } from 'rxjs';

@Component({
  selector: 'app-switch-map-component',
  imports: [],
  templateUrl: './switch-map-component.html',
  styleUrl: './switch-map-component.css'
})
export class SwitchMapComponent {
  ngOnInit() {
    const observable: any = new Observable((subscriber) => {
      console.log('Observable started');
      subscriber.next({ name: 'sachin', isSelected: true });
      subscriber.next({ name: 'Anup', isSelected: true });
      subscriber.next({ name: 'ABC', isSelected: true });
      subscriber.complete();
    }).pipe(
      //delay(100), // Wait for 300ms
      
      switchMap((data: any) => {
        console.log('Observable pipe executed with data:', data);
        return of(data.name); // return an observable emitting the name
      })
    );

    observable.subscribe(
      (data: any) => {
        console.log('Observable data received', data);
      },
      (error: any) => {
        console.error('Error in observable:', error);
      },
      () => {
        console.log('Observable completed');
      }
    );
  }
}
