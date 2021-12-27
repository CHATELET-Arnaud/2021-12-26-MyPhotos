export class MyPhoto {    
    title!: string;
    description!: string;
    createdDate!: Date;
    likes!: number;
    imageUrl!: string;
  
    constructor(title: string, description: string, createdDate: Date, likes: number, imageUrl: string) {      
      this.title = title;
      this.description = description;
      this.createdDate = createdDate;
      this.likes = likes;
      this.imageUrl = imageUrl;
    }
}