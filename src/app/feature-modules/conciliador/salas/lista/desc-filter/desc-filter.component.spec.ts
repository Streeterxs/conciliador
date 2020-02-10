import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescFilterComponent } from './desc-filter.component';

describe('DescFilterComponent', () => {
  let component: DescFilterComponent;
  let fixture: ComponentFixture<DescFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
