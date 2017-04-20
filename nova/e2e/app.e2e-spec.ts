import { NovaPage } from './app.po';

describe('nova App', () => {
  let page: NovaPage;

  beforeEach(() => {
    page = new NovaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
