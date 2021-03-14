import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {path:'albums',component:AlbumsComponent},
      
      {path:'about',component:AboutComponent},
      {path:'albums/:id',component:AlbumDetailsComponent},
      {path:'albums/:id/:id',component:AlbumPhotosComponent}

      
      
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    AboutComponent, 
    AlbumsComponent, 
    AlbumDetailsComponent, 
    AlbumPhotosComponent, 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/