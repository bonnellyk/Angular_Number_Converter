import { TangoPage } from './app.po';

describe('tango App', () => {
  let page: TangoPage;

  beforeEach(() => {
    page = new TangoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
