import { LoggedInGuard } from './guard/logged-in.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './modules/search/search.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonComponent } from './shared/pokemon/pokemon.component';
import { LoginComponent } from './modules/login/login.component';
import { TypeComponent } from './modules/type/type.component';
import { TypesComponent } from './modules/types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PokemonComponent,
    LoginComponent,
    TypeComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PokemonService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
