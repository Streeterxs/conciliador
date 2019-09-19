import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarComponent } from './criar.component';

describe('CriarComponent', () => {
  let component: CriarComponent;
  let fixture: ComponentFixture<CriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
