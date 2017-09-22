import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes-screen',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'My Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
