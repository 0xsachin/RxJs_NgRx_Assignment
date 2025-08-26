import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FromeventComponent } from './fromevent-component/fromevent-component';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable-component/observable-component';
import { MapOperator } from './map-operator/map-operator';
import { IntervalTimerComponent } from './interval-timer-component/interval-timer-component';
import { OfFromRangeComponent } from './of-from-range-component/of-from-range-component';
import { SubjectComponent } from './subject-component/subject-component';
import { FilterOperator } from './filter-operator/filter-operator';
import { JoinCreationOperator } from './join-creation-operator/join-creation-operator';

@Component({
  selector: 'app-rxjs-component',
  imports: [
    ObservableComponent,
    SubjectComponent,
    MapOperator,
    FilterOperator,
    JoinCreationOperator,
    IntervalTimerComponent,
    OfFromRangeComponent,
    FromeventComponent,
    CommonModule
  ],
  templateUrl: './rxjs-component.html',
  styleUrl: './rxjs-component.css'
})
export class RxjsComponent {
  selectedType = '';

  ngOnInit() {
    console.log('RxjsComponent initialized');
  }

  onTypeChange(type: string) {
    this.selectedType = type;
    console.log('Selected type:', this.selectedType);
  }
}
