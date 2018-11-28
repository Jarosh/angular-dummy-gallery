import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GalleryCard } from '../../interfaces';
import { GalleryResource } from '../../resources/gallery.resource';
import { GalleryComponent } from './gallery.component';
import { GalleryCardComponent } from '../gallery-card.component/gallery-card.component';

import { GalleryResourceMock } from '../../app.component.spec';


describe('GalleryComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        GalleryComponent,
        GalleryCardComponent,
      ],
      providers: [
        { provide: GalleryResource, useClass: GalleryResourceMock },
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    const com = fixture.debugElement.componentInstance;
    expect(com).toBeTruthy();
  });

});
