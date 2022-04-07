import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public coktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://static.750g.com/images/600-600/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description: 'Mojito is a cocktail made with white rum, lime juice, sugar, and soda water. The name comes from moseito, which means to sleep. The drink is traditionally served neat in Collins glasses that are highballed.'
    },
    {
      name: 'Margarita',
      img: 'https://media.istockphoto.com/photos/cocktail-classic-margarita-with-lime-and-salt-picture-id817352270?k=20&m=817352270&s=612x612&w=0&h=YRk5ek6rmueV_30rSUjptR-TpFHBO8P16o3VFf1TsZw=',
      description: 'Margarita is a cocktail made with tequila, triple sec, and lime juice. The name of the drink comes from the combination of margarita and tequila, since when is a margarita what is tequila?'
    },
    {
      name: 'Daiquiri',
      img: 'https://c8.alamy.com/compfr/cy6d5k/frozen-strawberry-daiquiri-cocktail-d-alcool-isole-sur-fond-blanc-cy6d5k.jpg',
      description: 'Daiquiri is a cocktail made with white rum, lime juice, and soda water. The name comes from the Spanish word d\'aqua, which means \'water\'.'
    }
  ]);

  public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(this.coktails$.value[0]);

  public selectCocktail(index: number): void {
    this.selectedCocktail$.next(this.coktails$.value[index]);
  }

  constructor() {}
}
