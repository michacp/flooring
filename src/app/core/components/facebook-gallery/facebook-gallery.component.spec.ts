import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookGalleryComponent } from './facebook-gallery.component';

describe('FacebookGalleryComponent', () => {
  let component: FacebookGalleryComponent;
  let fixture: ComponentFixture<FacebookGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
