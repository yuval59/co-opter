import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedListComponent } from './unverified-list.component';

describe('UnverifiedListComponent', () => {
  let component: UnverifiedListComponent;
  let fixture: ComponentFixture<UnverifiedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnverifiedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
