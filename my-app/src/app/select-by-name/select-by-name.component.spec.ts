import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectByNameComponent } from './select-by-name.component';

describe('SelectByNameComponent', () => {
  let component: SelectByNameComponent;
  let fixture: ComponentFixture<SelectByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
