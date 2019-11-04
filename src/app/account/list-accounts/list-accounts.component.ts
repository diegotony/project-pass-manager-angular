import { Component, OnInit, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AES, enc } from "crypto-ts";
import { AngularFirestore } from "@angular/fire/firestore";
import "rxjs/add/operator/map";

@Component({
  selector: "app-list-accounts",
  templateUrl: "./list-accounts.component.html",
  styleUrls: ["./list-accounts.component.scss"]
})
export class ListAccountsComponent implements OnInit {
  accounts: Observable<any[]>;
  modalRef: BsModalRef;
  checkoutForm;
  key = "millave"; //No debe tener espacios

  constructor(
    private db: AngularFirestore,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
    
  ) {

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
          return { id, ...data };
        });
      }); 
       
  }
  deleteAccount(value) {
    this.db
      .collection("accounts")
      .doc(value)
      .delete();
  }

  openModal(template: TemplateRef<any>) {
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
}
