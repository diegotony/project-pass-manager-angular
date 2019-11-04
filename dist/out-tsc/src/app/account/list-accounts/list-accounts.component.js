import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { AES } from "crypto-ts";
import "rxjs/add/operator/map";
let ListAccountsComponent = class ListAccountsComponent {
    constructor(db, modalService, formBuilder) {
        this.db = db;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.key = "millave"; //No debe tener espacios
        this.checkoutForm = this.formBuilder.group({
            provider: "",
            email: "",
            password: ""
        });
    }
    ngOnInit() {
        this.getAccounts();
    }
    getAccounts() {
        this.accounts = this.db
            .collection("accounts")
            .snapshotChanges()
            .map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        });
    }
    deleteAccount(value) {
        this.db
            .collection("accounts")
            .doc(value)
            .delete();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    updateAccount(value, id) {
        this.db
            .collection("accounts")
            .doc(id).update({
            email: AES.encrypt(value.email, this.key).toString(),
            password: AES.encrypt(value.password, this.key).toString(),
            provider: value.provider,
            users_email_id: "Ox2uBGY5rT3B3ErWbi1c"
        });
        this.checkoutForm.reset();
    }
};
ListAccountsComponent = tslib_1.__decorate([
    Component({
        selector: "app-list-accounts",
        templateUrl: "./list-accounts.component.html",
        styleUrls: ["./list-accounts.component.scss"]
    })
], ListAccountsComponent);
export { ListAccountsComponent };
//# sourceMappingURL=list-accounts.component.js.map