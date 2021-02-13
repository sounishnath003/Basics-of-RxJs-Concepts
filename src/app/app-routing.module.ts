import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FromEventComponent} from "./components/observables/fromEvent.component";
import {DashboardComponent} from "./containers/dashboard.component";
import {ListComponent} from "./components/list.component";

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {path: '', component: ListComponent},
            {path: 'fromEvent', component: FromEventComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
