import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AvionComponent } from './avion/avion.component';
import { BarraComponent } from './barra/barra.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PortadaComponent } from './portada/portada.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    AvionComponent,
    BarraComponent,
    KeyframesComponent,
    LoadingComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    PortadaComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
