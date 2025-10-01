import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExclusiveOfferComponent } from './home-exclusive-offer.component';

describe('HomeExclusiveOfferComponent', () => {
  let component: HomeExclusiveOfferComponent;
  let fixture: ComponentFixture<HomeExclusiveOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExclusiveOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeExclusiveOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
