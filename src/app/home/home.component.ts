import { Component, OnInit } from '@angular/core';
import {home} from '../home';
import {albums} from '../albums';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  albums=albums;
  homes=home;
  constructor() { }

}