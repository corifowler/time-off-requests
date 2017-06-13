import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent {
    constructor(
        private _router: Router
    ) {}

    private navigateToPage(route) {
        this._router.navigate([route]);
    }
}
