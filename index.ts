import { HeroWithHelm } from "./gear/hero-helm";
import { HeroWithShield } from "./gear/hero-shield";
import { HeroWithSword } from "./gear/hero-sword";

import { Hero } from "./heroes/hero";
import { RangerHero } from "./heroes/ranger-hero";
import { WarriorHero } from "./heroes/warrior-hero";

const hero1: Hero = new HeroWithSword(new HeroWithShield(new WarriorHero()));
console.log(`${hero1.getGear()} , Total: ${hero1.powerup()}`);

const hero2: Hero = new HeroWithHelm(new RangerHero());
console.log(`${hero2.getGear()} , Total: ${hero2.powerup()}`);
