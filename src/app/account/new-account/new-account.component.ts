import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { AES, enc } from "crypto-ts";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.scss"]
})
export class NewAccountComponent {
  modalRef: BsModalRef;
  items;
  checkoutForm;
  valorEncriptacion = 10; //puede ser cualquier numero
  key = "millave"; //No debe tener espacios
  userData;
  constructor(
    private modalService: BsModalService,
    private db: AngularFirestore,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.checkoutForm = this.formBuilder.group({
      provider: "",
      email: "",
      password: ""
    });
    this.userData= this.authService.test();
    // console.log(this.userData.id)
  }
  

  openModal(template: TemplateRef<any>) {
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
        users_email_id: localStorage.getItem('id')
      });
      this.checkoutForm.reset();


  }
}
