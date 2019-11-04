import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { AES } from "crypto-ts";
let NewAccountComponent = class NewAccountComponent {
    constructor(modalService, db, formBuilder) {
        this.modalService = modalService;
        this.db = db;
        this.formBuilder = formBuilder;
        this.valorEncriptacion = 10; //puede ser cualquier numero
        this.key = "millave"; //No debe tener espacios
        this.checkoutForm = this.formBuilder.group({
            provider: "",
            email: "",
            password: ""
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    saveAccount(value) {
        // this.db.collection('users').add({email:"test1234@face.com"})
        this.db
            .collection("accounts")
            .add({
            email: AES.encrypt(value.email, this.key).toString(),
            password: AES.encrypt(value.password, this.key).toString(),
            provider: value.provider,
            users_email_id: "Ox2uBGY5rT3B3ErWbi1c"
        });
        this.checkoutForm.reset();
        // let encryptedMessage = AES.encrypt("message", this.key).toString();
        // console.warn(encryptedMessage);
        // var bytes = AES.decrypt(encryptedMessage, this.key);
        // var plaintext = bytes.toString(enc.Utf8);
        // console.warn(plaintext)
    }
};
NewAccountComponent = tslib_1.__decorate([
    Component({
        selector: "app-new-account",
        templateUrl: "./new-account.component.html",
        styleUrls: ["./new-account.component.scss"]
    })
], NewAccountComponent);
export { NewAccountComponent };
//# sourceMappingURL=new-account.component.js.map