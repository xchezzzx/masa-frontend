import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent
    ],
    exports: [
        FormsModule,
        CommonModule
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CoreModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
