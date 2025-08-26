import { Component } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-subject-component',
  imports: [],
  templateUrl: './subject-component.html',
  styleUrl: './subject-component.css'
})
export class SubjectComponent {
  ngOnInit() {
    console.log('SubjectComponent initialized');

    // Create a new Subject
    const subject = new Subject<string>();

    // Subscribe to the Subject
    subject.subscribe(value => {
      console.log('Subject value:', value);
    });

    // Emit values through the Subject
    subject.next('Hello from Subject');
    subject.next('Another value from Subject');
  }
}
