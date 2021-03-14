import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Post} from './albums';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {htmlAstToRender3Ast} from '@angular/compiler/src/render3/r3_template_transform';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/albums';
  options = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(private client: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}`);
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(`${this.BASE_URL}/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.client.post<Post>(`${this.BASE_URL}/albums`, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.client.put<Post>(`${this.BASE_URL}/albums/${post.id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/albums/${id}`);
  }

}