import { Component } from '@angular/core';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent {
  constructor(private httpService : HttpService) { }
  get() {
    this.httpService.get().subscribe(
      response => console.log(response)
    );
  }
}
