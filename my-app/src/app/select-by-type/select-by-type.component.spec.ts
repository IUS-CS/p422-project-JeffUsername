import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectByTypeComponent } from './select-by-type.component';

describe('SelectByTypeComponent', () => {
  let component: SelectByTypeComponent;
  let fixture: ComponentFixture<SelectByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
