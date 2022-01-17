import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberVaccComponent } from './number-vacc.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NumberVaccComponent', () => {
  let component: NumberVaccComponent;
  let fixture: ComponentFixture<NumberVaccComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    await TestBed.configureTestingModule({
      declarations: [ NumberVaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberVaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
