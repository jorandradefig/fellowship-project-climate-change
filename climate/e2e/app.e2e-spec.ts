import { ClimatePage } from './app.po';

describe('climate App', () => {
  let page: ClimatePage;

  beforeEach(() => {
    page = new ClimatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
