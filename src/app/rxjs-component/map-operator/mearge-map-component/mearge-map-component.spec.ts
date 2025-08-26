import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeargeMapComponent } from './mearge-map-component';

describe('MeargeMapComponent', () => {
  let component: MeargeMapComponent;
  let fixture: ComponentFixture<MeargeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeargeMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeargeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
