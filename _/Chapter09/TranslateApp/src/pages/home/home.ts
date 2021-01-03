import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  language: string = "en";
  constructor(
    public navCtrl: NavController,
    private translate: TranslateService
  ) {
    translate.setDefaultLang("en");
    translate.use("en");
  }

  setLang() {
    console.log(this.language);
    this.translate.use(this.language);
  }
}
