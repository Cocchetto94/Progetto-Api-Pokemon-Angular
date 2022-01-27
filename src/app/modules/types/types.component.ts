import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
types: any[] = [];

  constructor(private pokeService: PokemonService) {
    this.pokeService.getAllTypes()
    .subscribe((response: any) => this.types = response.results);
   }

  ngOnInit(): void {
  }

}
