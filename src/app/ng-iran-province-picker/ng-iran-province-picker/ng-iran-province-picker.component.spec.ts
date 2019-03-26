import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIranProvincePickerComponent } from './ng-iran-province-picker.component';

describe('NgIranProvincePickerComponent', () => {
  let component: NgIranProvincePickerComponent;
  let fixture: ComponentFixture<NgIranProvincePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIranProvincePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIranProvincePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
