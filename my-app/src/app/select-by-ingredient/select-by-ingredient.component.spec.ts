import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectByIngredientComponent } from './select-by-ingredient.component';

describe('SelectByIngredientComponent', () => {
  let component: SelectByIngredientComponent;
  let fixture: ComponentFixture<SelectByIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectByIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
