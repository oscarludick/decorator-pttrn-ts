import { HeroWithHelm } from "./hero-gear/gear/hero-helm";
import { HeroWithShield } from "./hero-gear/gear/hero-shield";
import { HeroWithSword } from "./hero-gear/gear/hero-sword";

import { RangerHero } from "./hero-gear/heroes/ranger-hero";
import { WarriorHero } from "./hero-gear/heroes/warrior-hero";

import { Hero } from "./hero-gear/hero";

const hero1: Hero = new HeroWithSword(new HeroWithShield(new WarriorHero()));
console.log(`${hero1.getGear()} , Total: ${hero1.powerup()}`);

const hero2: Hero = new HeroWithHelm(new RangerHero());
console.log(`${hero2.getGear()} , Total: ${hero2.powerup()}`);
