import { Component } from '@angular/core';
import * as AOS from 'aos';
import { SnackbarService } from 'ngx-snackbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    //private connectionService: ConnectionService,

    private snackbar: SnackbarService
  ) {}
  title = 'addressAdvisors';
  ngOnInit() {
    AOS.init();
  }
}
