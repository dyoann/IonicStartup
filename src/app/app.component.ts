import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import { SettingsPage } from '../pages/settings/settings';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  isAuth: boolean = false;
  tabsPage:any     = TabsPage;
  authPage:any = AuthPage;
  settingsPage:any = SettingsPage;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
      platform.ready().then(() => {
      let config = {
		apiKey: "AIzaSyAx91ZvNwHesNWYAOLsbqxUiuk3W6K2oT0",
		authDomain: "http-client-demo-28cc1.firebaseapp.com",
		databaseURL: "https://http-client-demo-28cc1.firebaseio.com",
		projectId: "http-client-demo-28cc1",
		storageBucket: "http-client-demo-28cc1.appspot.com",
		messagingSenderId: "1091879406341"
	  };
	  firebase.initializeApp(config);

	  firebase.auth().onAuthStateChanged((user) => {
		  if (user) {
			this.isAuth = true;
			this.content.setRoot(TabsPage);
		  } else {
			this.isAuth = false;
			this.content.setRoot(AuthPage, { mode: 'connect' });
		  }
		});
  
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
	
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data?data:null);
    this.menuCtrl.close();
  }
  
  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
	
}


