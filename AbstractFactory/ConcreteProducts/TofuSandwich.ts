import { ISandwich } from '../../AbstractFactory/Interfaces/ISandwich';

export class TofuSandwich implements ISandwich {
  describe(): string {
    return 'A vege Tofu Sandwich.';
  }
}
