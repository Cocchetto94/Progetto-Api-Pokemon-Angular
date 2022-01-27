import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  type: string = '';
  pokemonByType: any[] = [];

  constructor(private pokeService: PokemonService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.type = params.type);
    this.pokeService.getType(this.type).subscribe((res: any) => {
       this.pokemonByType = res.pokemon;
    });
   }

  ngOnInit(): void {
  }

}
