import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-observable-component',
  imports: [],
  templateUrl: './observable-component.html',
  styleUrl: './observable-component.css'
})
export class ObservableComponent {
  ngOnInit() {
    console.log('ObservableComponent initialized');
    const observable:any = new Observable((subscriber) => {
      console.log('Observable started');
      subscriber.next('Anup!');    //emit data
      subscriber.next('Sachin!');    //emit data
      subscriber.error('Bye!');       //error data
      subscriber.complete();          // complete the observable
    })
    .pipe(
      // (data:any)=>{
      //   console.log('Observable pipe executed with data:', data);
      //   return data; // you can transform the data here if needed
      // }
      map((data:any) => {
        console.log('Observable pipe executed with data:', data);
        return data.toUpperCase(); // transform the data to uppercase
      })
    );

    //subscribe to the observable
    observable.subscribe((data:any)=>{
      console.log('Observable data received',data);   //Output: ANUP!, then output: SACHIN!
    },
    (error:any) => {
      console.error('Error in observable:', error);
    },()=>{
      console.log('Observable completed');
    });
  }
  
  // Additional methods and properties can be defined here  
}
