import { PokemonService } from 'src/app/services/pokemon.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
results: any[] = [];
q: string = '';
  constructor(private pokeService: PokemonService) {
    this.q = this.pokeService.query;
   if(this.q !== '' ) {
      this.submit(this.q);
  }
  }


  submit(query: string): void {
    this.pokeService.query = query;
    // filtro i pokemon sulla barra di ricerca in base alle lettere che digito
  this.results = this.pokeService.pokemons.filter((pokemon: any) => pokemon.name.includes(query.toLowerCase()));
   
  }

}
