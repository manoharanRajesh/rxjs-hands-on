import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit(): void {
    console.log(`Learn RXJS Basic`);
    const data = [1, 2, 3];
    console.log(`Create Observables, observer and subcription`);
    of(...data).subscribe({
      next: (value) => console.log(`Next value ${value}`),
      error: (err) => console.log(`Err has occurred: ${err}`),
      complete: () => console.log(`Compleated`)
    });

    from(data).subscribe(
      {
        next: (value) => console.log(`From Next value ${value}`),
        error: (err) => console.log(`From Err has occurred: ${err}`),
        complete: () => console.log(`From Compleated`)
      }
    );
    console.log(`Learn operators in rxjs https://rxjs.dev/api `);
    of(1,2,3)
    .pipe(
      map(value => value*2),
      map(value => value-3)
    ).subscribe(console.log);

    console.log(`Learn operators for debug `);
    of(1,2,3)
    .pipe(
      map(value => value*2),
      tap(value => console.log(`Debug log ${value}`)),
      map(value => value-3)
    ).subscribe(console.log);

  }
}
