import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrl: './hero-add.component.css'
})
export class HeroAddComponent {
  constructor(private heroService: HeroService,
    private location: Location){}
  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {  });
    this.location.back();
  }
}
