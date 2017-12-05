import { TestDemoAppPage } from './app.po';

describe('test-demo-app App', () => {
  let page: TestDemoAppPage;

  beforeEach(() => {
    page = new TestDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
