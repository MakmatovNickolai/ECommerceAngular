import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsGridComponent } from './new-products-grid.component';

describe('NewProductsGridComponent', () => {
  let component: NewProductsGridComponent;
  let fixture: ComponentFixture<NewProductsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProductsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
