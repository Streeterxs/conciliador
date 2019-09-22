import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIntegrantesComponent } from './chat-integrantes.component';

describe('ChatIntegrantesComponent', () => {
  let component: ChatIntegrantesComponent;
  let fixture: ComponentFixture<ChatIntegrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatIntegrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
