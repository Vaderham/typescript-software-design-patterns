import { TofuPizza } from '../../AbstractFactory/ConcreteProducts/TofuPizza';
import { TofuSandwich } from '../../AbstractFactory/ConcreteProducts/TofuSandwich';
import { IAbstractFoodFactory } from '../../AbstractFactory/Interfaces/IAbstractFoodFactory';
import { IPizza } from '../../AbstractFactory/Interfaces/IPizza';
import { ISandwich } from '../../AbstractFactory/Interfaces/ISandwich';

export class TofuFoodFactory implements IAbstractFoodFactory {
  orderPizza(): IPizza {
    return new TofuPizza();
  }
  orderSandwich(): ISandwich {
    return new TofuSandwich();
  }
}
