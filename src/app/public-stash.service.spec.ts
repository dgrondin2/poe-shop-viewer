import { TestBed } from '@angular/core/testing';

import { PublicStashService } from './public-stash.service';

describe('PublicStashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicStashService = TestBed.get(PublicStashService);
    expect(service).toBeTruthy();
  });
});
