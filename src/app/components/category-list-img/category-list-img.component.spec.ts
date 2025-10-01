import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListImgComponent } from './category-list-img.component';

describe('CategoryListImgComponent', () => {
  let component: CategoryListImgComponent;
  let fixture: ComponentFixture<CategoryListImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryListImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
