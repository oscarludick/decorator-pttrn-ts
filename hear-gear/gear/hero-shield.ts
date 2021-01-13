import { Hero } from "../hero";
import { HeroGearDecorator } from "../hero-gear-decorator";

export class HeroWithShield extends HeroGearDecorator {
  hero: Hero;

  constructor(hero: Hero) {
    super();
    this.hero = hero;
  }

  getGear(): string {
    return `${this.hero.getGear()}, shield 5 power`;
  }

  powerup(): number {
    return this.hero.powerup() + 5;
  }
}
