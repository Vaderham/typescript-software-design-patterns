import { ChickenPizza } from '../../AbstractFactory/ConcreteProducts/ChickenPizza';
import { TofuPizza } from '../../AbstractFactory/ConcreteProducts/TofuPizza';
import { IAbstractFoodFactory } from '../../AbstractFactory/Interfaces/IAbstractFoodFactory';
import { IPizza } from '../../AbstractFactory/Interfaces/IPizza';
import { ISandwich } from '../../AbstractFactory/Interfaces/ISandwich';

export class ChickenFoodFactory implements IAbstractFoodFactory {
  orderPizza(): IPizza {
    return new ChickenPizza();
  }
  orderSandwich(): ISandwich {
    return new TofuPizza();
  }
}
