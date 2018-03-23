import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import firebase from 'firebase';
import { ExpandableComponent } from '../../components/expandable/expandable';

@IonicPage({name: 'ExperiencePage'})
@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  items: any = [];
  itemExpandHeight: number = 180; //hard-coded height for expand, should be enough for the longest job description.

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {

    if (firebaseProvider.currentUser == " "){ // if the currentUser is not defined for some reason, it takes to the login page.
      this.navCtrl.setRoot('LoginPage');
      }

      this.items = [ //create each work experience "object".
        {expanded: false, title: "Consult/System Developer", company: "Digia PLC", time: "2017 ->", desc: "API development, achitecture, security, management, dx, ui, cloud services, integration, consulting"},
        {expanded: false, title: "Cyber security specialist", company: "Fitsec", time: "2017-2017", desc: "It and cypersecurity spesialist. Product development. Threat intelligence"},
        {expanded: false, title: "ICT-specialist", company: "DNA Ltd.", time: "2013-2017", desc: "Knowledge of all internet connection types, mobile networks, antenna and capel tv-network, Techsupport, DNA Kummi, Muutoksentekijä HR project, many of workshops"},
        {expanded: false, title: "Security Consult", company: "Securitas PLC", time: "2011-2013", desc: "Part of social & healthcare spesialized unit.."},
        
    ];  
  }
  expandItem(item){
    
    this.items.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
  }

  public logout() { // called from HTML element.
    firebase.auth().signOut().then(() => {
      console.log("Logged out!")
      this.firebaseProvider.currentUser = " "; // sets the currentUser to nobody.
      document.location.href = 'index.html'; // reloads the app to force the user out of the member area.
    }, function(error) {
      console.log("Error!")
    });
  }

}

