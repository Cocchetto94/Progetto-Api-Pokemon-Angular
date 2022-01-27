import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poke-app';

  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
   this.pokeService.findAll();
  
  }
}
