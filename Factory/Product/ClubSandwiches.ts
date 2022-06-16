import { Food } from '../../Factory/Product/Food';

export class ClubSandwiches implements Food {
  makeNoms(): string {
    return 'We made some nice ClubSandwiches';
  }
}
