// Import stylesheets
import { FoodEnvy } from './Factory/ConcreteCreators/FoodEnvy';
import { FoodService } from './Factory/FoodService';
import './style.css';

const service = new FoodEnvy();

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `${orderFood(service)}`;

function orderFood(service: FoodService): string {
  const order = service.createFood(2);
  return order.makeNoms();
}
