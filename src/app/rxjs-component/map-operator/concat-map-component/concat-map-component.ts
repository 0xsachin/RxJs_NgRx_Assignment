import { Component } from '@angular/core';
import { of, toArray,concat, concatMap, Observable ,debounceTime, delay} from 'rxjs';

@Component({
  selector: 'app-concat-map-component',
  imports: [],
  templateUrl: './concat-map-component.html',
  styleUrl: './concat-map-component.css'
})
export class ConcatMapComponent {
 ngOnInit() {
  // The concat operator in RxJS combines multiple Observables into a single Observable by subscribing to them one after the other.
  //  It ensures that the values from each Observable are emitted sequentially, in the order they were provided to concat. 

//exapmple 1
  const obs1 = of(1, 2);
  const obs2 = of(3, 4);
  const obs3 = of(5, 6);

  concat(obs1, obs2, obs3).
  subscribe(value => console.log(value));


  //exapmple 2
    const observable:any = new Observable((subscriber) => {
      console.log('Observable started');
      subscriber.next({name:'sachin',isSelected: true});    //emit data
      subscriber.next({name:'Anup',isSelected: true});    //emit data
      subscriber.next({name:'ABC',isSelected: true});    //emit data
      subscriber.complete();          // complete the observable
    })
    .pipe(
      delay(400), // Wait for 300ms
    
      concatMap((data:any) => {
        console.log('Observable pipe executed with data:', data);
        return of(data); // return an observable so use of() to wrap the data
      })
    );

    //subscribe to the observable
    observable.subscribe((data:any)=>{
      console.log('Observable data received',data);   //Output: sachin, then output: Anup, then output: ABC
    },
    (error:any) => {
      console.error('Error in observable:', error);
    },()=>{
      console.log('Observable completed');
    });
  }
}
