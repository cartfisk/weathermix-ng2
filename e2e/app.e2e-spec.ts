import { WeathermixNg2Page } from './app.po';

describe('weathermix-ng2 App', () => {
  let page: WeathermixNg2Page;

  beforeEach(() => {
    page = new WeathermixNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
