import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
query: string = '';
  pokemons: any[] = [];
  types: any;
  constructor(private http: HttpClient) {
  this.types = [];
  this.pokemons = [];
   }

   // chiamo tutti i pokemon
  getPokemon(name: string) {
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  findAll() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .subscribe((response: any) => this.pokemons = response.results);
  }

  // tutte le tipologie dei pokemon
  getAllTypes() {
    return this.http.get('https://pokeapi.co/api/v2/type?limit=20');
    
  }
// la tipologia e i pokemon associati
  getType(type: string) {
   return this.http.get(`https://pokeapi.co/api/v2/type/${type}`);
  }
}
