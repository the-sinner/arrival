import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromptService } from '../prompt.service';
import { genres } from '../db';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent {
  constructor(
    private route: ActivatedRoute,
    private promptService: PromptService,
    private router: Router) { }

  prompts: string[] = [];
  genre: string = "";
  imageLink: string = "";
  // imageUrl = 'https://example.com/image.jpg';

  ngOnInit() {
    this.getPrompts();
  }
  getPrompts() {
    this.genre = this.route.snapshot.paramMap.get('genre')!;
    this.prompts = this.promptService.getPrompts(this.genre);
    const genreObj = genres.find((obj) => obj.value == this.genre);
    if (genreObj !== undefined) {
      this.imageLink = genreObj!.imageUrl;
      console.log(this.imageLink)
      const bgEle = document.getElementById('bg');
      bgEle!.style.backgroundImage = "url(' " + this.imageLink +"')";
      bgEle!.style.backgroundRepeat = 'no-repeat';
      bgEle!.style.backgroundSize = 'cover';
    }
  }
}
