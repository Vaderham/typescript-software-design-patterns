import { FoodService } from '../../FactoryMethod/FoodService';
import { ClubSandwiches } from '../../FactoryMethod/Product/ClubSandwiches';
import { Food } from '../../FactoryMethod/Product/Food';
import { SausageRolls } from '../../FactoryMethod/Product/SausageRolls';

export class FoodEnvy extends FoodService {
  public createFood(hungerLevel: number): Food {
    if (hungerLevel < 5) {
      return new SausageRolls();
    } else {
      return new ClubSandwiches();
    }
  }
}
