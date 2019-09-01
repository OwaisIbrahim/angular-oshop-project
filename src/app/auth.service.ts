
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //where $ is just an notation to describe developers that its an observable
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,) {
    this.user$ = afAuth.authState;
    console.log(this.user$);

   }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();    
  }
}
