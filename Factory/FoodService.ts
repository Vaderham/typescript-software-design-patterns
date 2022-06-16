import { Food } from '../Factory/Product/Food';

export abstract class FoodService {
  public abstract createFood(hungerLevel: number): Food;

  public orderNoms(hungerLevel: number): string {
    const food = this.createFood(hungerLevel);
    return food.makeNoms();
  }
}
