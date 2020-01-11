import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliadorComponent } from './conciliador.component';

describe('ConciliadorComponent', () => {
  let component: ConciliadorComponent;
  let fixture: ComponentFixture<ConciliadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciliadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciliadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
