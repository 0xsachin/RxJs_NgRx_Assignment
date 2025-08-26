import { Component } from '@angular/core';
import  { toArray, Observable, take } from 'rxjs';
@Component({
  selector: 'app-to-array-component',
  imports: [],
  templateUrl: './to-array-component.html',
  styleUrl: './to-array-component.css'
})
export class ToArrayComponent {
  ngOnInit() {
    // The toArray operator in RxJS collects all values emitted by an Observable and emits them as an array when the source completes.
    // It is useful when you want to gather all emitted values into a single array.
    // we have to also use take oeperator to complete the observable after collecting all values.
    const observable = new Observable((subscriber) => {
      console.log('Observable started');
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      subscriber.next(5);

      subscriber.complete();
    });

    observable.pipe(
      take(3), // Take only the first 3 emitted values, if we don't use take operator then toArray return all single value one by one.
      toArray()
    ).subscribe((data: any) => {
      console.log('Collected data:', data); // Output: Collected data: [1, 2, 3]
    });
  }
}
