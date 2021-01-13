import { Hero } from "./hero";

export class RangerHero extends Hero {
  constructor() {
    super();
    this.gear = "Basic ranger gear 5 power";
  }

  powerup(): number {
    return 5;
  }
}
