import { PageFixture, TestBed } from '@angular/core/testing';

import { RxjsPage } from './rxjs.page';

describe('RxjsPage', () => {
  let Page: RxjsPage;
  let fixture: PageFixture<RxjsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsPage ]
    })
    .compilePages();

    fixture = TestBed.createPage(RxjsPage);
    Page = fixture.PageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(Page).toBeTruthy();
  });
});
