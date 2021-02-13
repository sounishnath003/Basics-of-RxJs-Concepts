import {Component} from "@angular/core";

@Component({
    selector: `app-navbar`,
    template: `
        <div class="flex flex-col bg-blue-50 md:flex-row p-2 cursor-pointer justify-items-evenly">
            <div class="m-auto" routerLink="/" >RxJs Angular</div>
            <div class="m-auto"></div>
            <div class="m-auto">Observable Demo</div>
        </div>
    `,
    styles: [``]
})
export class NavbarComponent {

}
