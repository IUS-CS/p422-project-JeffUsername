import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectByTypeIngredComponent } from './select-by-type-ingred.component';

describe('SelectByTypeIngredComponent', () => {
  let component: SelectByTypeIngredComponent;
  let fixture: ComponentFixture<SelectByTypeIngredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectByTypeIngredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectByTypeIngredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
