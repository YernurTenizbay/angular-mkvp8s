import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{albums} from '../albums';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album;
  
  constructor(private route:ActivatedRoute) { }
  ChangeTitle(newTitle:string){
    if(newTitle){
      this.album.title=newTitle;
    }
  }
  ReturnBack(){
    this.album.title=this.album.title2;
  }
  ngOnInit() {
    const routeParams=this.route.snapshot.paramMap;
    const alIdfromRoute=Number(routeParams.get('albumId'));
    this.album=albums.find(album=>album.id===alIdfromRoute);
  }

}