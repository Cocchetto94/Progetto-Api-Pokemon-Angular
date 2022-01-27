import { LoggedInGuard } from './guard/logged-in.guard';
import { LoginComponent } from './modules/login/login.component';
import { PokemonComponent } from './shared/pokemon/pokemon.component';
import { SearchComponent } from './modules/search/search.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './modules/type/type.component';
import { TypesComponent } from './modules/types/types.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
  {path: 'search', component: SearchComponent, canActivate: [LoggedInGuard]},
  {path: 'types', component: TypesComponent, canActivate: [LoggedInGuard]},
  {path: 'types/:type', component: TypeComponent, canActivate: [LoggedInGuard]},
  {path: 'pokemon/:name', component: PokemonComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
