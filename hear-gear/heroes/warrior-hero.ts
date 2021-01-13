import { Hero } from "./hero";

export class WarriorHero extends Hero {
  constructor() {
    super();
    this.gear = "Basic warrior gear 10 power";
  }

  powerup(): number {
    return 10;
  }
}
