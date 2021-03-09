import { Component, OnInit } from '@angular/core';
import{photos} from '../photos'
import {Location} from '@angular/common';
import{ActivatedRoute} from '@angular/router';
import{albums} from '../albums';
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _location: Location) { }
  photo;
  album;
  photos=photos;
  backClicked() {
    this._location.back();
  }
  ngOnInit() {

    
    const routeParams=this.route.snapshot.paramMap;
    const photoget=Number(routeParams.get('photoId'));
    const alIdfromRoute=Number(routeParams.get('albumId'));
    this.photo=photos.find(photo=>photo.albumId===alIdfromRoute);
    this.album=albums.find(album=>album.id===alIdfromRoute);
  }

}