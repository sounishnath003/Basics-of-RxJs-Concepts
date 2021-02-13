import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./components/common/navbar.component";
import {ListComponent} from "./components/list.component";
import {FromEventComponent} from "./components/observables/fromEvent.component";
import {DashboardComponent} from "./containers/dashboard.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        ListComponent,
        FromEventComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
