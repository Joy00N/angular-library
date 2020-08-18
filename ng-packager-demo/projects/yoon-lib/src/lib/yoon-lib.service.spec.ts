import { TestBed } from '@angular/core/testing';

import { YoonLibService } from './yoon-lib.service';

describe('YoonLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoonLibService = TestBed.get(YoonLibService);
    expect(service).toBeTruthy();
  });
});
