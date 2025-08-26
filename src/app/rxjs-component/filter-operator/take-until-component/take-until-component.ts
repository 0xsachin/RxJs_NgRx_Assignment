import { Component } from '@angular/core';
import { Observable, of, filter, takeUntil ,Subject} from 'rxjs';

@Component({
  selector: 'app-take-until-component',
  imports: [],
  templateUrl: './take-until-component.html',
  styleUrl: './take-until-component.css'
})
export class TakeUntilComponent { 
  // Create a notifier Subject that will emit to stop the main observable
  private stopNotifier = new Subject<void>();

  ngOnInit() {
    const observable = new Observable<any>((subscriber) => {
      console.log('Observable started');
      subscriber.next({ name: 'sachin', isSelected: true });
      subscriber.next({ name: 'Anup', isSelected: true });
      subscriber.next({ name: 'ABC', isSelected: false });
      subscriber.next({ name: 'XYZ', isSelected: true });
      subscriber.complete();
    }).pipe(
      takeUntil(this.stopNotifier)                 // Complete when notifier emits, takeUntil(this.stopNotifier) listens to stopNotifier.
    );

    observable.subscribe(
      data => {
        console.log('Observable data received', data);
        // For demo: stop after first item received by emitting from notifier
        this.stopNotifier.next();  // This will stop after first emission, When stopNotifier.next() is called, it completes the main observable subscription.
       
      },
      error => {
        console.error('Error in observable:', error);
      },
      () => {
        console.log('Observable completed');
      }
    );
  }
}
