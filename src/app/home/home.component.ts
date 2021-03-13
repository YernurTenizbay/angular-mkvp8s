import { Component, OnInit } from '@angular/core';
import {home} from '../home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  homes=home;
  constructor() { }

}