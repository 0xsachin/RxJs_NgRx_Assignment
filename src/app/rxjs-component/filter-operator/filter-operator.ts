import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter-component/filter-component';
import { TakeComponent } from './take-component/take-component';  
import { TakeUntilComponent } from './take-until-component/take-until-component';
import { DistinctUntilChangedComponent } from './distinct-until-changed-component/distinct-until-changed-component';

@Component({
  selector: 'app-filter-operator',
  imports: [CommonModule,FilterComponent,TakeComponent,TakeUntilComponent,DistinctUntilChangedComponent],
  templateUrl: './filter-operator.html',
  styleUrl: './filter-operator.css'
})
export class FilterOperator {
  selectedType = '';
  ngOnInit() {
    console.log('FilterOperator initialized');
  }
  onTypeChange(type: string) {
    this.selectedType = type;
    console.log('Selected type:', this.selectedType);
  }
}
