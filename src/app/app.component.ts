import { Component } from "@angular/core";

interface IPerson {
    name: string;
    id: string;
    address: string;
    email: string;
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
    
export class AppComponent {
    title = "masa-frontend";

    public person: IPerson = {
        name: "John Doe",
        id: "12345689",
        address: "HaNeemanim, 42",
        email: "jdoe@gmail.com"
    }

    public cardMessage: string = "";

    public onCardModeChanged(isEdit: boolean): void {
        this.cardMessage = isEdit ?
            "Please, fill in the data" :
            "Data saved"
    }

    // public onClickMeClick(): void {
    //     this.name = "New data!";
    // }
}
