import { Hero } from "../hero";
import { HeroGearDecorator } from "../hero-gear-decorator";

export class HeroWithSword extends HeroGearDecorator {
  hero: Hero;

  constructor(hero: Hero) {
    super();
    this.hero = hero;
  }

  getGear(): string {
    return `${this.hero.getGear()}, sword 20 power`;
  }

  powerup(): number {
    return this.hero.powerup() + 20;
  }
}
