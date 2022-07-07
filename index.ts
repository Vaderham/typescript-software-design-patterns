// Import stylesheets
import { ChickenFoodFactory } from './AbstractFactory/ConcreteFactories/ChickenFoodFactory';
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

const cp = new ChickenFoodFactory();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// const cp: HTMLElement = document.getElementById('ChickenPizza');
// const cs: HTMLElement = document.getElementById('ChickenSandwich');
// const tp: HTMLElement = document.getElementById('TofuPizza');
// const ts: HTMLElement = document.getElementById('TofuSandwich');
appDiv.innerHTML = `${cp.orderPizza().describe()}`;
