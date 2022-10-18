import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkerComponent } from './milker.component';

describe('MilkerComponent', () => {
  let component: MilkerComponent;
  let fixture: ComponentFixture<MilkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
