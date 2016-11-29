import { Day2Components1Page } from './app.po';

describe('day2-components1 App', function() {
  let page: Day2Components1Page;

  beforeEach(() => {
    page = new Day2Components1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
