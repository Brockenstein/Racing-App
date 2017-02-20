import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {enableProdMode} from '@angular/core';


import { AppComponent } from './app/app.component';
import { RacesComponent } from './app/races.component';
import { RaceService } from './app/race.service';


enableProdMode();

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [
    AppComponent,
    RacesComponent
   ],
  providers: [ RaceService ],
  bootstrap: [ AppComponent ]
})
class AppModule {}



platformBrowserDynamic().bootstrapModule(AppModule);
