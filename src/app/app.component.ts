import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar></app-navbar>
        <div class="container mt-10 px-2">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: []
})
export class AppComponent {
    title = 'rxjs-angular';
}
