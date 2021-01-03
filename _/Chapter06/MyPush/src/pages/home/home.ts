import { Component, ChangeDetectorRef  } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public messages = [];
  public clicked: Boolean = false;
  constructor(public navCtrl: NavController, public oneSignal: OneSignal, platform: Platform, private changeDetector: ChangeDetectorRef) {
    platform.ready().then(() => {
      this.oneSignalConfig();
    });
  }

  oneSignalConfig() {
    this.oneSignal.startInit("94218e7a-2307-41fa-9bc3-20783b4cde9a", "539293856976");
    // For debugging when we are developing to see the notification when app is focused
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.handleNotificationReceived().subscribe((value:any) => {
      // do something when notification is received
      let msg = value.payload;
      this.messages.push({
        title: msg.title,
        text: msg.body
      });
      this.changeDetector.detectChanges();
    });
    
    this.oneSignal.handleNotificationOpened().subscribe((value) => {
      // do something when a notification is opened
      console.log(value);
    });
    this.oneSignal.endInit();
  }
}
