import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PersonCardComponent } from './components/person-card/person-card.component';

@NgModule({

    declarations: [
        PersonCardComponent
    ],
    exports: [
        PersonCardComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ]
})

export class CoreModule {

}