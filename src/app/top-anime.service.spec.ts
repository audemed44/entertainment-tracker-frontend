import { TestBed } from '@angular/core/testing';

import { TopAnimeService } from './top-anime.service';

describe('TopAnimeService', () => {
  let service: TopAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
