import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkCustomersComponent } from './milk-customers.component';

describe('MilkCustomersComponent', () => {
  let component: MilkCustomersComponent;
  let fixture: ComponentFixture<MilkCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
