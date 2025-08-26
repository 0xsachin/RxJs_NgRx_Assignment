import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed-component',
  imports: [],
  templateUrl: './distinct-until-changed-component.html',
  styleUrl: './distinct-until-changed-component.css'
})
export class DistinctUntilChangedComponent {
  ngOnInit() {
    const observable = new Observable<any>((subscriber) => {
      console.log('Observable started');
      subscriber.next({ name: 'sachin', isSelected: true });
      subscriber.next({ name: 'sachin', isSelected: true });  // Duplicate
      subscriber.next({ name: 'Anup', isSelected: true });
      subscriber.next({ name: 'Anup', isSelected: false });   // Different isSelected
      subscriber.next({ name: 'Anup', isSelected: false });   // Duplicate
      subscriber.next({ name: 'XYZ', isSelected: true });
      subscriber.complete();
    }).pipe(
      distinctUntilChanged((prev, curr) => {
        // Custom comparator: return true if previous and current are equal (no emission)
        return prev.name === curr.name && prev.isSelected === curr.isSelected;
      })
    );

    observable.subscribe(
      data => {
        console.log('Observable data received', data);
        // Output: { name: 'sachin', isSelected: true }, { name: 'Anup', isSelected: true }, { name: 'Anup', isSelected: false }, { name: 'XYZ', isSelected: true }
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
