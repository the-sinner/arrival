import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromptService } from '../prompt.service';

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
  
  ngOnInit() {
    this.getPrompts();
  }
  getPrompts() {
    // console.log()
    this.genre = this.route.snapshot.paramMap.get('genre')!;
    this.prompts = this.promptService.getPrompts(this.genre);
  }
}
