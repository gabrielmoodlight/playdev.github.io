import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { getAnalytics } from 'firebase/analytics';
import { PostsService } from '../../services/posts.service';
import { marked } from 'marked';
import { Subscription, fromEvent } from 'rxjs';
import { SanitizeService } from 'src/app/services/sanitize.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  @ViewChild('title', { static: true }) titleRef!: ElementRef;

  @ViewChild('bodyCreator', { static: true }) bodyCreatorRef!: ElementRef;
  bodyOutput!: string | Promise<string>;

  subsEvent!: Subscription;

  constructor(
    private posts: PostsService,
    private sanitize: SanitizeService
  ) {}

  ngOnInit() {
    this.subsEvent = fromEvent(this.bodyCreatorRef.nativeElement, 'keyup').subscribe(ev => {
      this.bodyOutput = marked.parse(this.bodyCreatorRef.nativeElement.value);
    })
  }

  createPost() {
    this.posts.createPost(
      this.titleRef.nativeElement.value,
      JSON.stringify(this.bodyCreatorRef.nativeElement.value)
    );
  }

  ngOnDestroy() {
    this.subsEvent.unsubscribe();
  }
}
