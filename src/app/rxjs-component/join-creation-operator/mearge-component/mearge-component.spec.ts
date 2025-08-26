import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeargeComponent } from './mearge-component';

describe('MeargeComponent', () => {
  let component: MeargeComponent;
  let fixture: ComponentFixture<MeargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
