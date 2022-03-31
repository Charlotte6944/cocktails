import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.thecocktaildb.com/images/media/drink/vqwstt1487603116.jpg',
      description: 'Mojito is a cocktail made with white rum, lime juice, sugar, and soda water. The name comes from moseito, which means to sleep. The drink is traditionally served neat in Collins glasses that are highballed.'
    },
    {
      name: 'Margarita',
      img: 'https://www.thecocktaildb.com/images/media/drink/vqwstt1487603116.jpg',
      description: 'Margarita is a cocktail made with tequila, triple sec, and lime juice. The name of the drink comes from the combination of margarita and tequila, since when is a margarita what is tequila?'
    },
    {
      name: 'Daiquiri',
      img: 'https://www.thecocktaildb.com/images/media/drink/vqwstt1487603116.jpg',
      description: 'Daiquiri is a cocktail made with white rum, lime juice, and soda water. The name comes from the Spanish word d\'aqua, which means \'water\'.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
