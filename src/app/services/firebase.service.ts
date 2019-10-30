import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private baseAccountPath='/accounts';
  public accounts: any;
  public account:any;

  constructor(private db: AngularFireDatabase) { }

  addAccount(data){
    const obj = this.db.database.ref(this.baseAccountPath)
    obj.push(data);
    console.log('Success')
  }
}
