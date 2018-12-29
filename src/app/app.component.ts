import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Know by Self';
  private loginDialogRef: MatDialogRef<LoginDialogComponent>;

  constructor(private loginDialog: MatDialog, public afAuth: AngularFireAuth) {
  }

  login() {
    this.loginDialog.open(LoginDialogComponent);
  }
  logout() {
    this.afAuth.auth.signOut();
  }


}
