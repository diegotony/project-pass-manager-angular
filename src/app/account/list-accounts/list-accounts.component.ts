import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-list-accounts",
  templateUrl: "./list-accounts.component.html",
  styleUrls: ["./list-accounts.component.scss"]
})
export class ListAccountsComponent implements OnInit {
  accounts: Observable<any[]>;
  constructor(private db: AngularFirestore) {

  }
  ngOnInit(){
    this.getAccounts()
  }

  getAccounts() {
    this.accounts = this.db.collection("accounts").valueChanges();
  }
}
