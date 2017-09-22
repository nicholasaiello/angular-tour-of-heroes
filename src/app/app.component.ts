import { Component, OnInit } from '@angular/core';

import { HeroesComponent } from './heroes.component';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Tour of Heroes'

}
