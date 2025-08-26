import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhausMapComponent } from './exhaus-map-component';

describe('ExhausMapComponent', () => {
  let component: ExhausMapComponent;
  let fixture: ComponentFixture<ExhausMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhausMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhausMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
