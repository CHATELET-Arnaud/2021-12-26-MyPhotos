import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.scss']
})
export class MyPhotoComponent implements OnInit {
  imageUrl!: string;
  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  buttonText!: string;

  ngOnInit() {
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.likes = 6;
    this.buttonText = 'I like it !';
  }

  onLike() {
    if (this.buttonText === 'I like it !') {
      this.likes++;
      this.buttonText = 'Oops, un like !'
    } else {
      this.likes--;
      this.buttonText = 'I like it !';
    }
  }
}
