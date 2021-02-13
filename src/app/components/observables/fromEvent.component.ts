import {AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";
import {fromEvent} from "rxjs";

@Component({
    selector: `app-fromEvent`,
    template: `
        <div class="parent px-4">
            <div>
                <div class="text-2xl">Demo of FromEvent Observable</div>
                <div class="my-4">
                    <div><input type="text" placeholder="type something..."
                                class="bg-blue-50 p-2 w-full focus:ring outline-none rounded"></div>
                    <div class="mt-4">
                        <button #button class="rounded px-4 py-2 bg-green-400 inline">Click me</button>
                    </div>
                </div>
            </div>
            <div>
                <div class="text-xl">Received DataStream after clicking...</div>
                {{ dataStreams }}
            </div>
        </div>
    `,
    styles: [
        `.parent {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-column-gap: 50px;
            grid-row-gap: 10px;
        }`
    ]
})
export class FromEventComponent implements AfterViewInit {
    @ViewChild('button') button: ElementRef
    dataStreams;
    counter=0;
    ngAfterViewInit(): void {
        fromEvent(this.button.nativeElement, 'click').subscribe((res) => {
            this.dataStreams = `${JSON.stringify(res)} emitting ${this.counter++}`;
        })
    }

}
