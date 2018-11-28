import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GalleryCard } from '../../interfaces';
import { GalleryResource } from '../../resources/gallery.resource';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  public cards$: Observable<GalleryCard[]>;

  constructor(
    private galleryResource: GalleryResource
  ) {
    this.cards$ = this.galleryResource.getCards();
  }

}
