import { FoodService } from '../../Factory/FoodService';
import { ClubSandwiches } from '../../Factory/Product/ClubSandwiches';
import { Food } from '../../Factory/Product/Food';
import { SausageRolls } from '../../Factory/Product/SausageRolls';

export class FoodEnvy extends FoodService {
  public createFood(hungerLevel: number): Food {
    if (hungerLevel < 5) {
      return new SausageRolls();
    } else {
      return new ClubSandwiches();
    }
  }
}
