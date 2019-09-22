import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatChatBoxComponent } from './chat-chat-box.component';

describe('ChatChatBoxComponent', () => {
  let component: ChatChatBoxComponent;
  let fixture: ComponentFixture<ChatChatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatChatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
