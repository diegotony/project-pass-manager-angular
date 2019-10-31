import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.scss"]
})
export class NewAccountComponent {
  modalRef: BsModalRef;
  items;
  checkoutForm;

  constructor(
    private modalService: BsModalService,
    private db: AngularFirestore,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      provider: "",
      email: "",
      password: ""
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  saveAccount(value) {
    // db.collection('users').add({email:"test1234@face.com"})
    console.warn('Your order has been submitted', value);
    this.db
      .collection("accounts")
      .add({
        
        email: value.provider,
        password: value.password,
        provider: value.provider,
        users_email_id: "Ox2uBGY5rT3B3ErWbi1c"
      });
      this.checkoutForm.reset();
  }
}
