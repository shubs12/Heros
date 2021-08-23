import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes= HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero?:Hero;

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
  }

}
