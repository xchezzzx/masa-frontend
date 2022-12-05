import { Component, OnInit } from "@angular/core";
import { LocalStorageKeys } from "../../../constants";
import { LocalStorageService } from "../../services/local-storage.service";

interface IPerson {
    name: string;
    id: string;
    address: string;
    email: string;
}

@Component({
    selector: "app-persons.page",
    templateUrl: "./persons.page.html",
    styleUrls: ["./persons.page.less"],
})
    
export class PersonsPage implements OnInit {
    public JSON = JSON;

    public persons: IPerson[] | null = [
        {
            name: "John Doe",
            id: "ID757585",
            address: "Street house",
            email: "hghgh@hhg.rt"
          },
          {
            name: "Jane Doe",
            id: "IDhhfhf7585",
            address: "Street house",
            email: "jsosos@hhg.rt"
          }
    ];

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
