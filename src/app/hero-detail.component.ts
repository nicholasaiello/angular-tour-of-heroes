import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    template: `
        <section *ngIf="hero">
            <h2>{{ hero.name }} details</h2>
            <div>
              <label>id: </label> {{ hero.id }}
            </div>
            <div>
              <label>name: </label>
              <input [(ngModel)]="hero.name" placeholder="name" />
            </div>
            <button (click)="goBack()">Go Back</button>
        </section>
      `
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeMap: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log('HERE')
    this.routeMap.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
