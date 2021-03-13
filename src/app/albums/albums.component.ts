import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{Post} from '../albums';
import {PostsService} from '../albums.service';
import {httpClientInMemBackendServiceFactory} from 'angular-in-memory-web-api';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private postsService: PostsService) { }
  albums:Post[];
  loading: boolean;
  album_rev;
  lastid=100;
  element={
    userId: 1,
    id: 0,
    title: "sdfwegs",
  };
  
  create(newAlbum: string){
    if(newAlbum!=''){
    this.lastid+=1;
    var element={
    userId: 11,
    id: this.lastid,
    title: newAlbum,
    title2: newAlbum};
    this.albums.push(element);
    }
  }
  remove(){
    return 11;
  }
  ngOnInit() {
    this.getPosts();
    // const routeParams=this.route.snapshot.paramMap;
    // const alIdfromRoute=Number(routeParams.get('albumId'));
    // this.album_rev=this.albums.find(album_rev=>album_rev.id===alIdfromRoute);
  }
  addPost(post:Post){
    post.id=this.element.id;
    post.userId=this.element.userId;
    post.title=this.element.title;
    this.postsService.addPost(post);

  }
  getPosts() {
    this.loading = true;
    this.postsService.getPosts().subscribe((posts) => {
      this.albums = posts;
      this.loading = false;
    });
  }

  deletePost(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.postsService.deletePost(id).subscribe();
  }

}