import { ChangeDetectorRef, Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { increment, decrement } from '../ngRx/actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule,AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-component',
  imports: [MatTableModule,FormsModule,CommonModule,AsyncPipe],
  templateUrl: './ngrx-component.html',
  styleUrl: './ngrx-component.css'
})
export class NgrxComponent {
displayedColumns: string[] = ['studNo', 'studName'];
   studNumber :any = 1;
   studName :any;
   count$: Observable<number>;
   students$: Observable<any[]>;
  
   studentArray = [
     { studNo: 1, studName: 'Hydrogen' },
     { studNo: 2, studName: 'Helium' },
     { studNo: 3, studName: 'Lithium'},
     { studNo: 4, studName: 'Beryllium'},
   ];
  
    constructor(private store: Store<{ counter: number; students: any[] }>) {
      this.count$ = store.select('counter');
      this.students$ = store.select('students');
  
      // Subscribe to students and call a method when data changes
      this.store.select('students').subscribe((students) => {
        this.target(students); // 👈 call your method here
      });
    }
  
     // This method is called when students data changes
    target(students: any[]) {
      if(students.length){
        // You can perform any logic here: filtering, aggregation, etc.
        //this.studentArray = [...this.studentArray, ...students]; // Update local array with new students
        students.map((student) => {
          if(student.studNo) 
            this.studentArray.push(student);
        })
        this.studentArray = [...this.studentArray]; // Create a new reference to trigger change detection
        console.log('Target method called. Updated students:', this.studentArray);
      }
    }
  
    increment() {
      this.store.dispatch(increment());
    }
  
    decrement() {
      this.store.dispatch(decrement());
    }
  
  
    addStudent() {
      if (this.studNumber && this.studName) {
        let iObj = {
          studNo: this.studNumber,
          studName: this.studName
        };
        // this.studentArray.push(iObj);
        // this.studentArray = [...this.studentArray]; // Create a new reference to trigger change detection
        // console.log("studentArray-->",this.studentArray);
       this.store.dispatch({
          type: 'ADD_STUDENT',
          payload: iObj
       });
        this.studNumber = this.studNumber + 1;
        this.studName = '';
      } else {
        alert('Please enter both student number and name');
      }
    } 
  
    // editStudent(index: number) { 
    //   const student = this.dataSource[index];
    //   this.studNumber = student.studNo;
    //   this.studName = student.studName;
    //   this.dataSource.splice(index, 1); // Remove the student from the list
    // }
}
