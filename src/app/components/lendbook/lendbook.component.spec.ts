import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendbookComponent } from './lendbook.component';

describe('LendbookComponent', () => {
  let component: LendbookComponent;
  let fixture: ComponentFixture<LendbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LendbookComponent]
    });
    fixture = TestBed.createComponent(LendbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
