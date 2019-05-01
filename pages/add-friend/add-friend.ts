import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html'
})
export class AddFriendPage {

  friend = {
    name: null,
    email: null,
    message: null
  }

  constructor(
    private viewCtrl: ViewController
  ) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  inviteFriend() {
    if (this.friend.name && this.friend.email) {
      // submit friend inviteFriend
      this.viewCtrl.dismiss(this.friend);
    }
  }
}