import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
