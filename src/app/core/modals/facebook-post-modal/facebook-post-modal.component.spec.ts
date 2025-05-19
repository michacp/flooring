import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookPostModalComponent } from './facebook-post-modal.component';

describe('FacebookPostModalComponent', () => {
  let component: FacebookPostModalComponent;
  let fixture: ComponentFixture<FacebookPostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookPostModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
