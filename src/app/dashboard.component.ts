import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'dashboard-screen',
    template: `
        <h2>Top Heroes</h2>
        <div class="grid grid-pad">
            <div *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]" class="col-1-4">
                <div class="module hero">
                    <h5>{{ hero.name }}</h5>
                </div>
            </div>
        </div>
    `
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {

    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then((heroes) => this.heroes = heroes.slice(1,5));
    }

}