import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GalleryCardComponent } from './gallery-card.component';


describe('GalleryCardComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        GalleryCardComponent,
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GalleryCardComponent);
    const com = fixture.debugElement.componentInstance;
    expect(com).toBeTruthy();
  });

});
