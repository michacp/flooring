import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFbComponent } from './carousel-fb.component';

describe('CarouselFbComponent', () => {
  let component: CarouselFbComponent;
  let fixture: ComponentFixture<CarouselFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselFbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
