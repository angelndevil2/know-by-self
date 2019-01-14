import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth) { }

  /**
   * isAdmin
   */
  public isAdmin() {
    return this.afAuth.auth && this.afAuth.auth.currentUser && this.afAuth.auth.currentUser.uid === environment.admin.uid;
  }
}
