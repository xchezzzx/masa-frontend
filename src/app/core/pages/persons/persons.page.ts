import { Component, OnInit } from "@angular/core";
import { Gender, Layout } from "src/app/enums";
import { LocalStorageKeys } from "../../../constants";
import { ISelectableOption } from "../../entities";
import { LocalStorageService } from "../../services/local-storage.service";

interface IPerson {
    name: string;
    id: string;
    address: string;
    email: string;
    gender: string;
}

@Component({
    selector: "app-persons.page",
    templateUrl: "./persons.page.html",
    styleUrls: ["./persons.page.less"],
})
    
export class PersonsPage implements OnInit {
    public JSON = JSON;
    public Layout = Layout;

    public persons: IPerson[] | null = [];
    public personOptions: ISelectableOption<IPerson>[] = [];
    public selectedPerson: IPerson | null = null;

    public layoutOptions: ISelectableOption<Layout>[] = [];
    public selectedPersonLayout: Layout = Layout.Vertical;

    public cardMessage: string = "";

    public genderOptions: string[] = ["Male", "Female"];

    constructor(private localStorageService: LocalStorageService) {}

    public ngOnInit(): void {
        this.persons = this.localStorageService.get(LocalStorageKeys.PERSONS);
    }

    public onCardModeChanged(isEdit: boolean): void {
        this.cardMessage = isEdit ? "Please, fill in the data" : "Data saved";

        if (this.persons) {
            this.personOptions = this.persons?.map((person: IPerson) => {
                return {
                    title: person.name,
                    value: person
                };
            });

            this.selectedPerson = this.persons.length > 0 ? this.persons[0] : null;
        }
    }


    public onSaveClicked(): void {
        console.log("save clicked");
        this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
    }

    // public onClickMeClick(): void {
    //     this.myProperty = "New data!";
    // }

}
