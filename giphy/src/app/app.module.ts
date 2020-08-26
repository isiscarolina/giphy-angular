import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GiftsComponent } from './gifts/gifts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusquedaComponent,
    GiftsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
