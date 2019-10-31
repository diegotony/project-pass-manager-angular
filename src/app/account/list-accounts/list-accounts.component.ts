import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import 'rxjs/add/operator/map';
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
    this.accounts = this.db.collection("accounts").snapshotChanges().map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
    console.log(this.accounts)

  }
  deleteAccount(value){
    this.db.collection('accounts').doc(value).delete();
  }
}
