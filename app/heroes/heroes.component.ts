import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HeroService } from '../services/hero.service';
import { HeroDetailComponent } from '../hero/hero.component';
import { Hero } from '../services/hero';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    public heroes = Array<Hero>();
    public selectedHero: Hero;

    constructor(private _heroService: HeroService, private _router: Router) { }

    getHeroes() {
        this.selectedHero = undefined;
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);

        return this.heroes;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    ngOnInit() {
        this.heroes = this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
