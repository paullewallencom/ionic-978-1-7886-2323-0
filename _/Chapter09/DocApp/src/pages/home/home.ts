import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  /**
   * Following is the way you write documentation
   *
   * @param username Username of the user
   * @returns        It returns a string value
   */
  dummyFunction(username: string) {
    return username;
  }
}
