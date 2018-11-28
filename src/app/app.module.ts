import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery.component/gallery.component';
import { GalleryCardComponent } from './components/gallery-card.component/gallery-card.component';

import { GalleryResource } from './resources/gallery.resource';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
  ],
  providers: [
      GalleryResource,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
