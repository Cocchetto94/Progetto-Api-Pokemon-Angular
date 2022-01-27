import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

mostSearched: any[] = [];

  constructor() {
    this.mostSearched = [
      {name:"bulbasaur", url:"https://pokeapi.co/api/v2/pokemon/1/"},
      {name:"charmander", url:"https://pokeapi.co/api/v2/pokemon/4/"},
      {name:"squirtle", url:"https://pokeapi.co/api/v2/pokemon/7/"},
      {name:"pidgey", url:"https://pokeapi.co/api/v2/pokemon/16/"}
    ]
   }

  ngOnInit(): void {
  }

}
