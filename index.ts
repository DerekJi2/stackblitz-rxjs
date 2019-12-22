import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { Chapter2 } from './chapter2';

sample();

Chapter2.page80();

function sample() {
  const source = of('World').pipe(
    map(x => `Hello ${x}!`)
  );

  source.subscribe(x => console.log(x));
}
