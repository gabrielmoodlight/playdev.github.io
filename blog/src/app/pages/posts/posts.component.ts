import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSnapshot, get, off } from 'firebase/database';
import { PostResponse } from 'src/app/models/posts.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: PostResponse[] = [];

  constructor(
    private service: PostsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.handlePosts();
  }

  private getPosts() {
    return get( this.service.postsRef );
  }

  private handlePosts() {
    this.getPosts().then((snapshot: DataSnapshot) => {      
      if (snapshot.exists()) {

        const response = snapshot.val();
        
          if (response) {

            Object.keys(response).forEach(key => {

              const post: PostResponse = {
                key,
                title: response[key].title,
                body: response[key].body
              };

              this.posts.push(post);
          })

          } else {
            console.log("Não há postagens");
          }

      } else {
        console.log("Esse serviço não existe");
      }
    }).catch((err) => {
      console.log('Error', err);
    })
  }

  public readMore(key: string) {
    this.router.navigate(['post', key]);
  }
}
