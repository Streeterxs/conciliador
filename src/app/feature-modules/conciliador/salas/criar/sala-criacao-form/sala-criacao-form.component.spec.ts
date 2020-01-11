import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaCriacaoFormComponent } from './sala-criacao-form.component';

describe('SalaCriacaoFormComponent', () => {
  let component: SalaCriacaoFormComponent;
  let fixture: ComponentFixture<SalaCriacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaCriacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaCriacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
