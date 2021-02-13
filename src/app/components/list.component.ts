import {Component} from "@angular/core";

@Component({
    selector: `app-list`,
    template: `
        <div class="parent text-center">
            <div *ngFor="let component of components;">
                <div class="max-w-md border border-blue-600 mx-auto0 cursor-pointer overflow-hidden hover:bg-indigo-300 m-3 h-20 rounded-lg">
                    <div routerLink="/{{component.link}}" class="text-center mt-6">{{component.name}}</div>
                </div>
            </div>
            <div class="px-2">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styles: [`.parent {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }`]
})
export class ListComponent {
    components = [{link: `fromEvent`, name: `From Event`}, {link: `fromEvent`, name: `From Event`}, {
        link: `fromEvent`,
        name: `From Event`
    }, {link: `fromEvent`, name: `From Event`}, {link: `fromEvent`, name: `From Event`}]
}
