import {TestBed, inject} from '@angular/core/testing';

import {BibliothequesService} from './bibliotheques.service';

describe('BibliothequesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibliothequesService]
    });
  });

  it('should be created', inject([BibliothequesService], (service: BibliothequesService) => {
    expect(service).toBeTruthy();
  }));
});
