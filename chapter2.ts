import { of } from 'rxjs'; 

export class Chapter2 {

  public page80() {
    const source$ = of(1, 2, 3);
    source$.subscribe(console.log);
  }
  
}