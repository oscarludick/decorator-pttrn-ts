import { Hero } from "../heroes/hero";
import { HeroGearDecorator } from "./hero-gear-decorator";

export class HeroWithHelm extends HeroGearDecorator {
  hero: Hero;

  constructor(hero: Hero) {
    super();
    this.hero = hero;
  }

  getGear(): string {
    return `${this.hero.getGear()}, helm 10 power`;
  }
  powerup(): number {
    return this.hero.powerup() + 10;
  }
}
