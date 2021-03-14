
import {Component, OnInit} from '@angular/core';
import {Post} from '../albums';
import {ActivatedRoute} from '@angular/router';

import {Location} from '@angular/common';
import {PostsService} from '../albums.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  photo;
  album:Post;

  loading: boolean;
  constructor(private route:ActivatedRoute,private _location: Location,private postsService: PostsService) { }
  ChangeTitle(newTitle:string){
    if(newTitle){
      this.album.title=newTitle;
    }
  }

  backClicked() {
    this._location.back();
  }
  ReturnBack(){
    
  }
  ngOnInit() {
    // const routeParams=this.route.snapshot.paramMap;
    // const alIdfromRoute=Number(routeParams.get('albumId'));
    // this.getPost(alIdfromRoute);
    this.route.paramMap.subscribe((params) => {
      var id = +params.get('id');
      this.getPost(id);
    });
  }
  getPost(id: number) {
    
    this.loading = true;
    this.postsService.getPost(id).subscribe((album) => {
      this.album = album;
      this.loading = false;
    });
    
  }

}