import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GalleryCard } from '../interfaces';


@Injectable()
export class GalleryResource {

  constructor(
    private http: HttpClient
  ) {
  }

  public getCards(): Observable<GalleryCard[]> {
    return this.http.get<GalleryCard[]>('/assets/mocks/gallery.json');
  }

}
