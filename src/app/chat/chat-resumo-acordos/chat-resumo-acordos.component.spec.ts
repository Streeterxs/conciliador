import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatResumoAcordosComponent } from './chat-resumo-acordos.component';

describe('ChatResumoAcordosComponent', () => {
  let component: ChatResumoAcordosComponent;
  let fixture: ComponentFixture<ChatResumoAcordosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatResumoAcordosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatResumoAcordosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
