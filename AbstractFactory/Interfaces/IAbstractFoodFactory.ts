import { IPizza } from '../../AbstractFactory/Interfaces/IPizza';
import { ISandwich } from '../../AbstractFactory/Interfaces/ISandwich';

export interface IAbstractFoodFactory {
  orderPizza(): IPizza;
  orderSandwich(): ISandwich;
}
