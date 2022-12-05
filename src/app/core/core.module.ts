import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { States } from "../constants";
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonsPage } from './pages/persons/persons.page';
import { Page404 } from './pages/404.page/404.page';

const routes: Routes = [
    { path: States.persons, component: PersonsPage },
    { path: "**", component: Page404 }
];

@NgModule({

    declarations: [
        PersonCardComponent,
        PersonsPage,
        Page404
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PersonCardComponent
    ]
})

export class CoreModule {

}