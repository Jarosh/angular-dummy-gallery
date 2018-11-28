import { Component, Input } from '@angular/core';

import { GalleryCard } from '../../interfaces';


@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent {

  @Input() card: GalleryCard;

  public getCardImageURL(): string {
    return `/assets/gallery/${encodeURI(this.card.image)}`;
  }

}
