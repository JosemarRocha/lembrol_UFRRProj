import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  login(user: User){
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result){
      console.log(result),
      this.navCtrl.setRoot('HomePage')
    }
    }
    catch(e)
    {
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push("RegisterPage");
  }
}
