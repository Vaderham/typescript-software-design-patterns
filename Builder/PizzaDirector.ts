import { PizzaBuilder } from '../Builder/PizzaBuilder';
import { Pizza } from '../Builder/types/Pizza';

export class PizzaDirector {
  private builder: PizzaBuilder;

  public setBuilder(builder: PizzaBuilder) {
    this.builder = builder;
  }

  public createBasicPizza(): Pizza {
    this.builder.addBread('Thin crust');
    this.builder.addCheese('mozzarella');
    this.builder.cook('Pizza oven');
    return this.builder.getFood();
  }

  public createEverythingPizza(): Pizza {
    this.builder.addBread('Thick crust with stuffed cheese');
    this.builder.addSalad('Mesculin salad');
    this.builder.addProtien('Chicken, Pork and Lamb');
    this.builder.addCheese('mozzarella and feta');
    this.builder.cook('Wood fired Pizza oven');
    return this.builder.getFood();
  }
}
