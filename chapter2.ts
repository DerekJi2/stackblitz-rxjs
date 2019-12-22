import { of } from 'rxjs'; 
import { Observable } from 'rxjs/Observable';

export class Chapter2 {

  public page80() {
    console.log('Page 80 ...');
    const source$ = of(1, 2, 3);
    source$.subscribe(console.log);
    
  }
  
  public page85() {
    console.log('Page 85 ...');

    const onSubscribe = observer => {
      observer.next(1);
      observer.next(2);
      observer.next(6);
    };

    const source$ = new Observable(onSubscribe);

    const theObserver = {
      next: item => console.log(item)
    };

    source$.subscribe(theObserver);
  }
}