import { TimeRequestsAppPage } from './app.po';

describe('time-requests-app App', () => {
  let page: TimeRequestsAppPage;

  beforeEach(() => {
    page = new TimeRequestsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
