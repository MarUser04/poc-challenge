import { TestBed } from '@angular/core/testing';

import { FilledFormService } from './filled-form.service';

describe('FilledFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilledFormService = TestBed.get(FilledFormService);
    expect(service).toBeTruthy();
  });
});
