import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://www.machine-soda.fr/wp/wp-content/uploads/mojito-alcool.jpg',
    description: 'Mojito is a cocktail made with white rum, lime juice, sugar, and soda water. The name comes from moseito, which means to sleep. The drink is traditionally served neat in Collins glasses that are highballed.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
