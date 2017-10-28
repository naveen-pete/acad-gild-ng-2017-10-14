import { LifecycleHooksAppPage } from './app.po';

describe('lifecycle-hooks-app App', () => {
  let page: LifecycleHooksAppPage;

  beforeEach(() => {
    page = new LifecycleHooksAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
