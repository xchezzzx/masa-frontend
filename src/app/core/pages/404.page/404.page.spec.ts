import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404 } from './404.page';

describe('P404PageComponent', () => {
  let component: Page404;
  let fixture: ComponentFixture<Page404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page404 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
