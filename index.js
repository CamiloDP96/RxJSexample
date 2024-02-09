import {of} from 'rxjs';
import {map, filter} from 'rxjs/operators';

const numerosObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const imparesObservable = numerosObservable.pipe(
    map(numero => {
        if (numero % 2 !== 0) {
            return numero;
        } else {
            return null;
        }
    }),
    filter(numero => numero !== null)
);

imparesObservable.subscribe(numero => console.log(numero));