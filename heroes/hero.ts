export abstract class Hero {
  protected gear: string = "None";

  public getGear(): String {
    return this.gear;
  }

  abstract powerup(): number;
}
