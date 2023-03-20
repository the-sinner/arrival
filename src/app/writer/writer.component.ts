import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromptService } from '../prompt.service';
import Quill from 'quill';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent {
  constructor(
    private route: ActivatedRoute,
    private promptService: PromptService,
    private router: Router) { }

  content = '';
  prompt: string = "";
  idx: number = -1;
  genre: string = "";
  localKey = "";
  ngOnInit() {
    this.genre = this.route.snapshot.paramMap.get('genre')!;
    this.idx = parseInt(this.route.snapshot.paramMap.get('idx')!, 10);
    this.localKey = this.genre+this.idx;
    this.prompt = this.promptService.getPrompt(this.genre, this.idx);
    this.content = localStorage.getItem(this.localKey) ?? "";
    // console.log(this.prompt)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
    if (event.event === 'text-change') {
      localStorage.setItem(this.localKey, event.html ?? "");
    }
  }

}