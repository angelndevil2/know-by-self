import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Av } from '../data/av';

@Component({
  selector: 'app-jav-insert',
  templateUrl: './jav-insert.component.html',
  styleUrls: ['./jav-insert.component.css']
})
export class JavInsertComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router, private loginService: LoginService) {
    // check login state
    if (!this.loginService.isAdmin()) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
  }

  public insert(code: string, title: string, desc: string) {
    const doc = this.db.collection('avs').doc(code);

    doc.get().subscribe(data => {
      if (data.exists) {
        console.error(code, 'already exists');
      } else {
        this.db.collection('avs').doc(code).set({ title, desc });
      }
    });
  }
}
