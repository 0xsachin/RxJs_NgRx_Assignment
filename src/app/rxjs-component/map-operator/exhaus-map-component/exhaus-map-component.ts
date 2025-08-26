import { Component } from '@angular/core';
import { exhaustMap, Observable,of } from 'rxjs';

@Component({
  selector: 'app-exhaus-map-component',
  imports: [],
  templateUrl: './exhaus-map-component.html',
  styleUrl: './exhaus-map-component.css'
})
export class ExhausMapComponent {
    ngOnInit() {
      const observable: any = new Observable((subscriber) => {
        console.log('Observable started');
        subscriber.next({ name: 'sachin', isSelected: true });
        subscriber.next({ name: 'Anup', isSelected: true });
        subscriber.next({ name: 'ABC', isSelected: true });
        subscriber.complete();
      }).pipe(
        //delay(100), // Wait for 300ms
        
        exhaustMap((data: any) => {
          console.log('Observable pipe executed with data:', data);
          return of(data); // return an observable emitting the name
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
