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
  remove(){
    this.album_rev.userId=2;
  }
  ngOnInit() {
    const routeParams=this.route.snapshot.paramMap;
    const alIdfromRoute=Number(routeParams.get('albumId'));
    this.album_rev=albums.find(album_rev=>album_rev.id===alIdfromRoute);
  }

}