import { browser, by, element } from 'protractor';


export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getSubtitleText() {
    return element(by.css('app-root h3')).getText();
  }

  getGalleryContainer() {
    return element(by.css('app-root app-gallery')).isPresent();
  }

  countGalleryCards() {
    return element.all(by.css('app-root app-gallery app-gallery-card')).count();
  }

}
