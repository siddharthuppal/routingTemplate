import { RoutingTemplatePage } from './app.po';

describe('routing-template App', () => {
  let page: RoutingTemplatePage;

  beforeEach(() => {
    page = new RoutingTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
