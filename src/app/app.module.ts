import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AnothertopbarComponent } from './anothertopbar/anothertopbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
];


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    NgbModule, // bootstrap
    RouterModule.forRoot(appRoutes)  ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, AnothertopbarComponent, HomeComponent, GalleryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
