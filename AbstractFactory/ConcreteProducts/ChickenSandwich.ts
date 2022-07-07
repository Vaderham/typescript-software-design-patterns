import { ISandwich } from '../../AbstractFactory/Interfaces/ISandwich';

export class ChickenSandwich implements ISandwich {
  describe(): string {
    return 'A tasty Chicken sandwich.';
  }
}
