import { AnimationsAppPage } from './app.po';

describe('animations-app App', () => {
  let page: AnimationsAppPage;

  beforeEach(() => {
    page = new AnimationsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
