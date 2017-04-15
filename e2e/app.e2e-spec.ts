import { IpltourPage } from './app.po';

describe('ipltour App', () => {
  let page: IpltourPage;

  beforeEach(() => {
    page = new IpltourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
