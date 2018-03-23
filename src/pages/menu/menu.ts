// This is the side menu which can be opened from the top-left corner of the user interface.

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

 export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
 }
 
@IonicPage({name: 'MenuPage'})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [ // list of icons in the menu which can be clicked to access different pages of the app.
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'LoggedinPage', index: 0, icon: 'home'},
    { title: 'Education', pageName: 'TabsPage', tabComponent: 'EducationPage', index: 1, icon: 'book'},
    { title: 'Experience', pageName: 'TabsPage', tabComponent: 'ExperiencePage', index: 2, icon: 'briefcase'},
    { title: 'Skills', pageName: 'TabsPage', tabComponent: 'SkillsPage', index: 3, icon: 'cloud'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) { // displays PageInterface in a cool way.
    let params ={};

    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();

    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

