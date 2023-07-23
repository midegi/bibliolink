import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfinderComponent } from './bookfinder.component';

describe('BookfinderComponent', () => {
  let component: BookfinderComponent;
  let fixture: ComponentFixture<BookfinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookfinderComponent]
    });
    fixture = TestBed.createComponent(BookfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
