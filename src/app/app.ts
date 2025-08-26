import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {NgrxComponent} from './ngrx-component/ngrx-component';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs-component/rxjs-component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    NgrxComponent,
    RxjsComponent,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  ngRxFlag = false;
  rxJsFlag = false;

  openRxJS() {
    this.ngRxFlag = false;
    this.rxJsFlag = true;
  }

  openNgRx() {
    this.ngRxFlag = true;
    this.rxJsFlag = false;
  }

  message: string = '';

  promissCalled() {
    console.log('promissCalled');
    this.message = 'Fetching data...';

    // Create a new Promise
    const dataPromise = new Promise<string>((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., an API call)
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve('Data fetched successfully!'); // Resolve the promise with a value
        } else {
          reject('Failed to fetch data.'); // Reject the promise with an error
        }
      }, 2000); // Simulate a 2-second delay
    });

    // Handle the promise's resolution or rejection
    dataPromise
      .then((data) => {
        this.message = data; // Update message on success
        console.log('Promise resolved:', this.message);
      })
      .catch((error) => {
        this.message = `Error: ${error}`; // Update message on error
      });
  } 

  async asyncwaitCalled() {
    console.log('asyncwaitCalled');
    this.message = 'Fetching data...';

    // Create a new Promise
    const dataPromise = new Promise<string>((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., an API call)
      setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
          resolve('Data fetched successfully!'); // Resolve the promise with a value
        } else {
          reject('Failed to fetch data.'); // Reject the promise with an error
        }
      }, 2000); // Simulate a 2-second delay
    });

    try {
      const data = await dataPromise; // Wait for the promise to resolve
      this.message = data; // Update message on success
      console.log('Async/await resolved:', this.message);
    } catch (error) {
      this.message = `Error: ${error}`; // Update message on error
    }

  }
}
