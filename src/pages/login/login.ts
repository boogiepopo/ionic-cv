// The page used for logging in.

// Authentication doesn't really make sense for an app that's main purpose is to serve as CV.
// However, sign-in and registration was created to meet the requirements of the course.

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@IonicPage({name: 'LoginPage'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) { // Simple way to send message to the user.
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value + '@domian.xta', this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser); // writes in the console a huge pile of data to help the development process.

      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( 'MenuPage' );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log('Would sign in with ', this.user.value, this.password.value);
    this.firebaseProvider.currentUser = String(this.user.value); // gives our app the information of who is currently using the app.
  }

  register() { // Function for the register button.
  	this.navCtrl.push('RegisterPage');
  }

}

