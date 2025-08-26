import { Component } from '@angular/core';
import { Observable, of, filter} from 'rxjs';

@Component({
  selector: 'app-filter-component',
  imports: [],
  templateUrl: './filter-component.html',
  styleUrl: './filter-component.css'
})
export class FilterComponent {
  ngOnInit() {
      const observable: any = new Observable((subscriber) => {
        console.log('Observable started');
        subscriber.next({ name: 'sachin', isSelected: true });
        subscriber.next({ name: 'Anup', isSelected: true });
        subscriber.next({ name: 'ABC', isSelected: false });
        subscriber.complete();
      }).pipe(
        filter((value: any) => {
          return value.isSelected === true;
        })
      );

      observable.subscribe(
        (data: any) => {
          console.log('Observable data received', data);  // output: { name: 'sachin', isSelected: true } and { name: 'Anup', isSelected: true }
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
