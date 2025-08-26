import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCreationOperator } from './join-creation-operator';

describe('JoinCreationOperator', () => {
  let component: JoinCreationOperator;
  let fixture: ComponentFixture<JoinCreationOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinCreationOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCreationOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
