import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-fromevent-component',
  imports: [],
  templateUrl: './fromevent-component.html',
  styleUrl: './fromevent-component.css'
})
export class FromeventComponent {
 @ViewChild('fromEventBtn', { static: true }) buttonRef!: ElementRef<HTMLButtonElement>;

 ngOnInit() {
    console.log('from event initialized');
    
    // Create an observable from the 'click' event on the button
    const buttonClicks$ = fromEvent(this.buttonRef.nativeElement, 'click');
    buttonClicks$.subscribe(event => {
      console.log('Button 1 clicked:', event);
    });

    // Example 2
    const button:any = document.getElementById('myButton2');
    const click$ = fromEvent(button, 'click');
    // Subscribe to the Observable to react to clicks
    click$.subscribe(event => {
      console.log('Button 2 clicked!', event);
    });


    
     
  }

  ngAfterViewInit(): void {
    // Example 3 for input added after view init because after UI is rendered This is to ensure the input field is available in the DOM
    // Create an Observable from keyboard input on an input field 
     const inputField:any = document.getElementById('myInput'); 
     const input$ = fromEvent(inputField, 'input'); 
     // Apply operators to transform and filter the input stream 
      
     input$.pipe( 
        map((event:any) => event.target.value),
        debounceTime(500) // Emit only after 500ms of no new input 
      ).subscribe(value => { 
        console.log('Input value:', value); 
      });
  }
  
}
