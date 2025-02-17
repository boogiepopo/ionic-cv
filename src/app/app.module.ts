import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AuthService } from '../providers/auth-service/auth-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExpandableComponent } from '../components/expandable/expandable';

const firebaseAuth = { // Database information that was copied from the Firebase project on browser.
    apiKey: "AIzaSyCR0GBoHTRKN9vM3lz-u8UiW4zfjeH7XNw",
    authDomain: "ionic-cv.firebaseapp.com",
    databaseURL: "https://ionic-cv.firebaseio.com",
    projectId: "ionic-cv",
    storageBucket: "ionic-cv.appspot.com",
    messagingSenderId: "1081119280816"
  };

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireDatabase,
    AuthService
  ]
})
export class AppModule {}


