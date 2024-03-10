import { Injectable } from '@angular/core';
import { update } from "firebase/database";
import { FirebaseService } from './firebase.service';
import { PostPayload } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsRef = this.firestore.getChild('posts');

  constructor(
    private firestore: FirebaseService
  ) {}

  createPost(title: string, body: string) {
    const post = {} as PostPayload;

    post[
      this.firestore.generateKey(this.postsRef) as string
    ] = { title, body };

    update(
      this.postsRef,
      post
    ).then((res) => {
      console.log('criado', res);
    });
  }
}
