import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{albums} from '../albums';

import {httpClientInMemBackendServiceFactory} from 'angular-in-memory-web-api';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }
  albums=albums;
  album_rev;
  lastid=7;
  create(newAlbum: string){
    if(newAlbum!=''){
    this.lastid+=1;
    var element={
    userId: 1,
    id: this.lastid,
    title: newAlbum,
    title2: newAlbum};
    this.albums.push(element);
    }
  }
  remove(album_rev){
    album_rev=album_rev.userId+1;
    return album_rev;
  }
  ngOnInit() {
    const routeParams=this.route.snapshot.paramMap;
    const alIdfromRoute=Number(routeParams.get('albumId'));
    this.album_rev=albums.find(album_rev=>album_rev.id===alIdfromRoute);
  }

}