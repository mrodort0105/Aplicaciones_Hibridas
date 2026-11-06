import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaItemComponent } from './carta-item.component';

describe('CartaItemComponent', () => {
  let component: CartaItemComponent;
  let fixture: ComponentFixture<CartaItemComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
