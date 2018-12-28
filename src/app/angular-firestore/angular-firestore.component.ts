import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-angular-firestore',
  templateUrl: './angular-firestore.component.html',
  styleUrls: ['./angular-firestore.component.css']
})
export class AngularFirestoreComponent implements OnInit {

  isLinear = false;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
  }

}
