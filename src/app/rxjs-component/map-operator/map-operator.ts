import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from './map-component/map-component';
import { ConcatMapComponent } from './concat-map-component/concat-map-component'; 
import { MeargeMapComponent } from './mearge-map-component/mearge-map-component';
import { SwitchMapComponent } from './switch-map-component/switch-map-component';
import { ExhausMapComponent } from './exhaus-map-component/exhaus-map-component';
import { ToArrayComponent } from './to-array-component/to-array-component';
@Component({
  selector: 'app-map-operator',
  imports: [CommonModule,MapComponent,MeargeMapComponent,ExhausMapComponent,
    ConcatMapComponent, SwitchMapComponent,ToArrayComponent,
  ],
  templateUrl: './map-operator.html',
  styleUrl: './map-operator.css'
})
export class MapOperator {
  selectedType = '';
  ngOnInit() {
    console.log('MapOperator initialized');
  }
  onTypeChange(type: string) {
    this.selectedType = type;
    console.log('Selected type:', this.selectedType);
  }
}
