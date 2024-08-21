import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuoteComponent } from './create-quote.component';

describe('CreateQuoteComponent', () => {
  let component: CreateQuoteComponent;
  let fixture: ComponentFixture<CreateQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
