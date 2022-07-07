import { Food } from "../../Factory/Product/Food";

export class SausageRolls implements Food {
  public makeNoms(): string {
    return 'We made some yum Sausage Rolls. You know the ones.';
  }
}
