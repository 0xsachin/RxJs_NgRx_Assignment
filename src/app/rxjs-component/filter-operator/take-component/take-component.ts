import { Component } from '@angular/core';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-take-component',
  imports: [],
  templateUrl: './take-component.html',
  styleUrl: './take-component.css'
})
export class TakeComponent {
  ngOnInit() {
    const observable: any = new Observable((subscriber) => {
      console.log('Observable started');
      subscriber.next({ name: 'sachin', isSelected: true });
      subscriber.next({ name: 'Anup', isSelected: true });
      subscriber.next({ name: 'ABC', isSelected: false });
      subscriber.complete();
    }).pipe(
      take(1)  // Take only the first 1 emissions
    );

    observable.subscribe(
      (data: any) => {
        console.log('Observable data received', data);  // output: { name: 'sachin', isSelected: true }
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
