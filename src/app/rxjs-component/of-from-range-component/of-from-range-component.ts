import { Component } from '@angular/core';
import { of, from, range } from 'rxjs';

@Component({
  selector: 'app-of-from-range-component',
  imports: [],
  templateUrl: './of-from-range-component.html',
  styleUrl: './of-from-range-component.css'
})
export class OfFromRangeComponent {
  ngOnInit() {
    console.log('OfFromComponent initialized');
    
    // Example of using 'of' to create an observable from a static value
    const ofObservable = of('Hello', 'World');
    ofObservable.subscribe(value => {
      console.log('Of Observable value:', value); // Output: Hello, then World
    });

    // Example of using 'from' to create an observable from an array
    const fromArray = from([1, 2, 3, 4, 5]);
    fromArray.subscribe(value => {
      console.log('From Observable value:', value);   //1,2,3,4,5
    });

    // Example of using 'range' to create an observable that emits a range of numbers
    // The first argument is the start value, and the second is the count of numbers to emit
    const rangeOb = range(1,5);
    rangeOb.subscribe(value => {
      console.log('range Observable value:', value);  //1,2,3,4,5
    });
  }
}
