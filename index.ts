import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { Chapter2 } from './chapter2';

//sample();

const c2 = new Chapter2();
// c2.page80();
// c2.page85();
// c2.page91();
c2.page107();

/**
 * 
 */
function sample() {
  const source = of('World').pipe(
    map(x => `Hello ${x}!`)
  );

  source.subscribe(x => console.log(x));
}
