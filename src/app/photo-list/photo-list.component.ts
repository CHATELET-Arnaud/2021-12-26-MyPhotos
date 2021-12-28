import { Component } from '@angular/core';
import { Photo } from '../models/photo.model';
import { PhotosService } from '../services/photos.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})

export class PhotoListComponent {
  myPhotos!: Photo[];

  ngOnInit(): void {
    this.myPhotos = this.photosService.photos;
  }

  constructor(private photosService: PhotosService) {}
}
