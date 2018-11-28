import { AppPage } from './app.po';


describe('workspace-project App', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to angular-dummy-gallery!');
  });

  it('should display subtitle text', () => {
    page.navigateTo();
    expect(page.getSubtitleText()).toEqual('Drag&Drop images to reorder');
  });

  it('should show gallery', () => {
    page.navigateTo();
    expect(page.getGalleryContainer()).toBeTruthy();
  });

  it('should contain some gallery cards', () => {
    page.navigateTo();
    expect(page.countGalleryCards()).toBeGreaterThanOrEqual(5);
  });

});
