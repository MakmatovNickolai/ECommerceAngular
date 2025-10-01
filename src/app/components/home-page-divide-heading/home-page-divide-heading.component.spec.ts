import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDivideHeadingComponent } from './home-page-divide-heading.component';

describe('HomePageDivideHeadingComponent', () => {
  let component: HomePageDivideHeadingComponent;
  let fixture: ComponentFixture<HomePageDivideHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageDivideHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageDivideHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
