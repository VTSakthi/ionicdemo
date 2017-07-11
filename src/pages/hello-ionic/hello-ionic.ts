import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public userName: any;
  public password: any;
  constructor(public toastCtrl: ToastController) {

  }

  login() {
    if (this.userName == "test" && this.password == "test") {
      let toast = this.toastCtrl.create({
        message: 'login successfully',
        duration: 3000
      });
      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: 'login failed',
        duration: 3000
      });
      toast.present();
    }
  }
}
