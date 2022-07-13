// Import stylesheets
import { ChickenFoodFactory } from './AbstractFactory/ConcreteFactories/ChickenFoodFactory';
import { PizzaBuilder } from './Builder/PizzaBuilder';
import { PizzaDirector } from './Builder/PizzaDirector';
import { FoodEnvy } from './FactoryMethod/ConcreteCreators/FoodEnvy';
import { FoodService } from './FactoryMethod/FoodService';
import './style.css';

/*
// Factory Method
const service = new FoodEnvy();

function orderFood(service: FoodService): string {
  const order = service.createFood(2);
  return order.makeNoms();
}
*/

/*
const chickenFactory = new ChickenFoodFactory();
*/

const director: PizzaDirector = new PizzaDirector();
director.setBuilder(new PizzaBuilder());

const basicPizza = director.createBasicPizza();
const everythingPizza = director.createEverythingPizza();

const basicPizzaDiv: HTMLElement = document.getElementById('basicPizza');
const everythingPizzDiv: HTMLElement =
  document.getElementById('everythingPizza');
basicPizzaDiv.innerHTML = `${basicPizza.bread}, ${basicPizza.cheese}, ${basicPizza.cookingMethod}`;
everythingPizzDiv.innerHTML = `${everythingPizza.bread}, ${everythingPizza.protien}, ${everythingPizza.cheese}, ${everythingPizza.salad}, ${everythingPizza.cookingMethod}`;

document
  .getElementById('ChickenPizza')
  .addEventListener('click', () => doStuff());
// const cs: HTMLElement = document.getElementById('ChickenSandwich');
// const tp: HTMLElement = document.getElementById('TofuPizza');
// const ts: HTMLElement = document.getElementById('TofuSandwich');
// appDiv.innerHTML = `${chickenFactory.orderPizza().describe()}`;

function doStuff(): void {
  console.log('Do stuff');
}
