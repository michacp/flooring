import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktokVideoComponent } from './tiktok-video.component';

describe('TiktokVideoComponent', () => {
  let component: TiktokVideoComponent;
  let fixture: ComponentFixture<TiktokVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiktokVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiktokVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
