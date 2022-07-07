import { IPizza } from '../../AbstractFactory/Interfaces/IPizza';

export class ChickenPizza implements IPizza {
  describe(): string {
    return 'A chicken Pizza with tasy cheese.';
  }
}
