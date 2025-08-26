import { Component } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-interval-timer-component',
  imports: [],
  templateUrl: './interval-timer-component.html',
  styleUrl: './interval-timer-component.css'
})
export class IntervalTimerComponent {
  intervalSubscription: Subscription | undefined;

  constructor() {}
  ngOnInit() {
    console.log('IntervalTimerComponent initialized');
    // You can add logic here to start an interval timer or any other initialization code
  
  
     // Emits a value every 1000ms (1 second)
    this.intervalSubscription = interval(1000)
      // .pipe(take(5)) // Take only the first 5 emissions
      .subscribe(val => {
        // this.count = val;
        console.log('Interval emission:', val);

        if (val > 5) {
          this.stopInterval();
          console.log('Interval stopped.');
        }
      });

      timer(2000).subscribe(() => {
      console.log('Timer is called after 2 seconds');
      });
  }

  stopInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      console.log('Interval stopped manually.');
    }
  }
}
