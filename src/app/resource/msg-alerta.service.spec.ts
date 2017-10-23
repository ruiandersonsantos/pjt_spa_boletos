import { TestBed, inject } from '@angular/core/testing';

import { MsgAlertaService } from './msg-alerta.service';

describe('MsgAlertaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgAlertaService]
    });
  });

  it('should be created', inject([MsgAlertaService], (service: MsgAlertaService) => {
    expect(service).toBeTruthy();
  }));
});
