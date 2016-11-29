import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes = HEROES;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
