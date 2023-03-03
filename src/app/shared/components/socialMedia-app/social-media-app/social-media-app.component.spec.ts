import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAppComponent } from './social-media-app.component';

describe('SocialMediaAppComponent', () => {
  let component: SocialMediaAppComponent;
  let fixture: ComponentFixture<SocialMediaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
