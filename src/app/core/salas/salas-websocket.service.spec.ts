import { TestBed } from '@angular/core/testing';

import { SalasWebsocketService } from './salas-websocket.service';

describe('SalasWebsocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalasWebsocketService = TestBed.get(SalasWebsocketService);
    expect(service).toBeTruthy();
  });
});
