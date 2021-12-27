import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})

export class PhotoComponent {
  buttonText: string = "I like it!";
  @Input() photo!: Photo;

  onLike() {
    if (this.buttonText === 'I like it!') {
      this.photo.likes++;
      this.buttonText = 'I don\'t like it!';
    } else {
      this.photo.likes--;
      this.buttonText = 'I like it!';
    }
  }
}
