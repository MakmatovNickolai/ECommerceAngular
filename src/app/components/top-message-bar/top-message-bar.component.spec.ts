import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMessageBarComponent } from './top-message-bar.component';

describe('TopMessageBarComponent', () => {
  let component: TopMessageBarComponent;
  let fixture: ComponentFixture<TopMessageBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMessageBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopMessageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
