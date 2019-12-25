import { of, timer } from 'rxjs'; 
import { Observable } from 'rxjs/Observable';
import { takeUntil, take, tap } from 'rxjs/operators';

export class Chapter2 {
  /**
   * 
   */
  public page107() {
    console.log('Page 91 ...');

    const onSubscribe = observer => {
      let data = 1;
      const interval = setInterval(() => {
        observer.next(data++);
      }, 1000);
      return {
        unsubscribe: () => {
          clearInterval(interval);
        }
      };
    };

    const source$ = new Observable(onSubscribe);

    const theObserver = {
      next: item => console.log(item)
    };

    const subscription = source$
    .pipe(
      tap((data) => {
        if (data > 3) {
          subscription.unsubscribe();
        }
      }),
    )
    .subscribe(theObserver);
  }
  /**
   * 
   */
  public page91() {
    console.log('Page 91 ...');

    const onSubscribe = observer => {
      let data = 1;
      const interval = setInterval(() => {
        observer.next(data++);
        // if (data > 3) {
        //   clearInterval(interval);
        // }        
      }, 1000);
    };

    const source$ = new Observable(onSubscribe);

    const theObserver = {
      next: item => console.log(item)
    };

    source$
    .pipe(take(3))
    .subscribe(theObserver);
  }

  /**
   * 
   */
  public page80() {
    console.log('Page 80 ...');
    const source$ = of(1, 2, 3);
    source$.subscribe(console.log);
    
  }
  
  /**
   * 
   */
  public page85() {
    console.log('Page 85 ...');

    const onSubscribe = observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    };

    const source$ = new Observable(onSubscribe);

    const theObserver = {
      next: item => console.log(item)
    };

    source$.subscribe(theObserver);
  }
}