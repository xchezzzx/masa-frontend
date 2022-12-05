import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonsPage } from "./core/pages/persons/persons.page";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
