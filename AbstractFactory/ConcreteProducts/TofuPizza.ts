import { IPizza } from '../../AbstractFactory/Interfaces/IPizza';

export class TofuPizza implements IPizza {
  describe(): string {
    return 'The ultimate Vege Tofu pizza.';
  }
}
