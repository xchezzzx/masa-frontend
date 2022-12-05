import { Component, OnInit } from "@angular/core";
import { LocalStorageKeys } from "./constants";
import { LocalStorageService } from "./core/services/local-storage.service";

interface IPerson {
    name: string;
    id: string;
    address: string;
    email: string;
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
    title = "masa-frontend";

    public JSON = JSON;

    public persons: IPerson[] | null = null;

    public cardMessage: string = "";

    constructor(private localStorageService: LocalStorageService) {}

    public ngOnInit(): void {
        this.persons = this.localStorageService.get(LocalStorageKeys.PERSONS);
    }

    public onCardModeChanged(isEdit: boolean): void {
        this.cardMessage = isEdit ? "Please, fill in the data" : "Data saved";
    }

    public onSaveClicked(): void {
        console.log("save clicked");
        this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
    }

    // public onClickMeClick(): void {
    //     this.name = "New data!";
    // }
}
