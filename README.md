# Decorator Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).

### Desing principles

* Clases should be open for extension, closed to modification

**Be careful when choosing the areas of code that need to be extended; applying the OPEN-CLOSED principle everywhere is wasteful and unnecesary, and can lead to complex, hard-to-understad code**

### The decorator pattern

When we got class explosions and rigid desings we should use the decorator pattern, but how to decorate a object? firstly think about the decorator objects as "wrappers".

* Decorators have the same supertype as the objects they decorate.
* You can use one or more decorators to wrap and object. 
* Given that the decorator has the same supertype as the object it decorates, we can pass around a decorated object in place of the original (wrapped) object.
* The decorator adds its own behavior either before and/or after delegating to the object it decorates to do the rest of the job.
* Objects can be decorated at any time, so we can decorate objects dynamically at runtime with as many decorators as we like.

### In resume

The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

### The Hero-With-Gear Example

We use a Hero abstract class to create our heroes, this class will be decorated with gear for our hero.

```ts
export abstract class Hero {
  protected gear: string = "None";

  public getGear(): String {
    return this.gear;
  }

  abstract powerup(): number;
}
```

Then we have a Hero-Gear-Decorator or wrapper.

```ts
export abstract class HeroGearDecorator extends Hero {
  abstract hero: Hero;

  abstract getGear(): string;
}
```

Our heroes can extend from our Hero abstract class. We initialize our gear description and provide a default power value.

```ts
export class WarriorHero extends Hero {
  constructor() {
    super();
    this.gear = "Basic warrior gear 10 power";
  }

  powerup(): number {
    return 10;
  }
}
```

Now we can wrap our Hero with a Shield Decotator, this class extends from our HeroGearDecorator. So our Hero becomes a HeroWithShield. The decorators adds its behavior after the Hero behavior.

```ts
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
```

The result.

```ts
const hero1: Hero = new HeroWithSword(new HeroWithShield(new WarriorHero()));
console.log(`${hero1.getGear()} , Total: ${hero1.powerup()}`);

const hero2: Hero = new HeroWithHelm(new RangerHero());
console.log(`${hero2.getGear()} , Total: ${hero2.powerup()}`);
```

```bash
Basic warrior gear 10 power, shield 5 power, sword 20 power , Total: 35

Basic ranger gear 5 power, helm 10 power , Total: 15
```