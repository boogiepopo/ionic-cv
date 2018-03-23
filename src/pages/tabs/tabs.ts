// This is the tabs bar visible at the bottom of the application user interface.

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({name: 'TabsPage'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage { // These are accessed from the "tabs.html". And this causes the HTML take the user to the named pages.
  tab1Root='LoggedinPage';
  tab2Root='EducationPage';
  tab3Root='ExperiencePage';
  tab4Root='SkillsPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

