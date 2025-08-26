import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-map-component',
  imports: [],
  templateUrl: './map-component.html',
  styleUrl: './map-component.css'
})
export class MapComponent {
  ngOnInit() {
      const observable:any = new Observable((subscriber) => {
        console.log('Observable started');
        subscriber.next({name:'sachin',isSelected: true});    //emit data
        subscriber.next({name:'Anup',isSelected: true});    //emit data
        subscriber.next({name:'ABC',isSelected: true});    //emit data
        subscriber.complete();          // complete the observable
      })
      .pipe(
        map((data:any) => {
          console.log('Observable pipe executed with data:', data);
          return data.name; // retuern only the name property
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
