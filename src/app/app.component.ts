import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

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
    )
  }
}
