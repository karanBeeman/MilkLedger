import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMatDialogComponent } from './profile-mat-dialog.component';

describe('ProfileMatDialogComponent', () => {
  let component: ProfileMatDialogComponent;
  let fixture: ComponentFixture<ProfileMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
