import { NotasPage } from './app.po';

describe('notas App', function() {
  let page: NotasPage;

  beforeEach(() => {
    page = new NotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
