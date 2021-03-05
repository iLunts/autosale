import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToSellComponent } from './want-to-sell.component';

describe('WantToSellComponent', () => {
  let component: WantToSellComponent;
  let fixture: ComponentFixture<WantToSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantToSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
