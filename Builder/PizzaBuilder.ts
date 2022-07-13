import { IFoodBuilder } from '../Builder/IFoodBuilder';
import { Pizza } from '../Builder/types/Pizza';

export class PizzaBuilder implements IFoodBuilder {
  private pizza: Pizza;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.pizza = new Pizza();
  }

  addBread(bread: string) {
    this.pizza.bread = `You use a ${bread} base.`;
  }
  addSalad(salad: string) {
    this.pizza.salad = `You add some ${salad}.`;
  }
  addProtien(protien: string) {
    this.pizza.protien = `You then add some ${protien}.`;
  }
  addCheese(cheese: string) {
    this.pizza.cheese = `No pizza is complete without ${cheese}`;
  }
  cook(cookingMethod: string) {
    this.pizza.cookingMethod = `You cook it all in a ${cookingMethod}`;
  }
  public getFood(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}
