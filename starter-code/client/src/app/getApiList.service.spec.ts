/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetApiListService } from './getApiList.service';

describe('Service: GetApiList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetApiListService]
    });
  });

  it('should ...', inject([GetApiListService], (service: GetApiListService) => {
    expect(service).toBeTruthy();
  }));
});
