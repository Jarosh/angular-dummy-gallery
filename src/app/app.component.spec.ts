import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { GalleryCard } from './interfaces';
import { GalleryResource } from './resources/gallery.resource';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery.component/gallery.component';
import { GalleryCardComponent } from './components/gallery-card.component/gallery-card.component';


export class GalleryResourceMock {

  public getCards(): Observable<GalleryCard[]> {
    return of([
        {
            image: 'mix wall (64).jpg'
        },
        {
            image: 'mix wall (65).jpg'
        }
    ]);
  }
}


describe('AppComponent', () => {

  let galleryResource: GalleryResource;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        GalleryComponent,
        GalleryCardComponent,
      ],
      providers: [
        { provide: GalleryResource, useClass: GalleryResourceMock },
      ],
    }).compileComponents();
    galleryResource = TestBed.get(GalleryResource);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-dummy-gallery'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-dummy-gallery');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-dummy-gallery!');
  });

  it('should render subtitle in a h3 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Drag&Drop images to reorder');
  });

});
