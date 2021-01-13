import { Hero } from "./hero";

export abstract class HeroGearDecorator extends Hero {
  abstract hero: Hero;

  abstract getGear(): string;
}
