import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddFriendPage } from '../add-friend/add-friend';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {

  icons = 'requests';
  friends: any[] = [
    {
      id_friend: 1,
      email: 'tertiuso@gmail.com',
      name: 'Tertius Olivier',
      profileimg: 'https://40y2ct3ukiiqtpomj3dvyhc1-wpengine.netdna-ssl.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Yo bro bean'
    },
    {
      id_friend: 2,
      email: 'tertiuso@gmaila.com',
      name: 'Tertius Olivier 1',
      profileimg: 'https://40y2ct3ukiiqtpomj3dvyhc1-wpengine.netdna-ssl.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Yo bro bean'
    },
    {
      id_friend: 3,
      email: 'tertiuso@gmailb.com',
      name: 'Tertius Olivier 2',
      profileimg: 'https://40y2ct3ukiiqtpomj3dvyhc1-wpengine.netdna-ssl.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Yo bro bean'
    },
    {
      id_friend: 4,
      email: 'tertiuso@gmailc.com',
      name: 'Tertius Olivier 3',
      profileimg: 'https://40y2ct3ukiiqtpomj3dvyhc1-wpengine.netdna-ssl.com/wp-content/uploads/icon-avatar-default.png',
      message: 'Yo bro bean'
    }
  ]
  count = this.friends.length;
  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

  addFriend() {
    const modal = this.modalCtrl.create(AddFriendPage);
    modal.present();
    modal.onDidDismiss(data => {
     console.log(data);
     data.id_friend = this.count + 1;
     data.profileimg = 'https://40y2ct3ukiiqtpomj3dvyhc1-wpengine.netdna-ssl.com/wp-content/uploads/icon-avatar-default.png',
     this.friends.push(data);
     this.count = this.friends.length;
    });
  }
  removeFriendAlert(f: any) {
    console.log(f);
    const that = this;
    const alert = this.alertCtrl.create({
      title: 'Remove Friend!',
      subTitle: `Are you sure you want to remove ${f.name} as your friend?`,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            console.log(f);
            console.log('delete confirm clicked');
            that.deleteFriend(f);
          }
        }
      ]
    });
    alert.present();
  }
  deleteFriend(friend: any) {
    // http call; to delete friend
    const i = this.friends.findIndex(i => i.id_friend === friend.id_friend);
    this.friends.splice(i, 1);
  }
  accept(friend: any) {
    console.log(friend);
    this.presentToast(friend, 'was added successfully');
    const i = this.friends.findIndex(i => i.id_friend === friend.id_friend);
    this.friends.splice(i, 1);
  }
  reject(friend: any) {
    console.log(friend);
    this.presentToast(friend, 'was removed successfully');
    const i = this.friends.findIndex(i => i.id_friend === friend.id_friend);
    this.friends.splice(i, 1);
  }
  acceptFriendAlert(f: any) {
    console.log(f);
    const that = this;
    const alert = this.alertCtrl.create({
      title: 'Friend Accepted!',
      subTitle: `Your have accepted ${f.name} as your friend`,
      buttons: ['Ok']
    });
    alert.present();
  }
  presentToast(friend: any, message: string) {
    const toast = this.toastCtrl.create({
      message: `${friend.name} ${message}`,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  importContacts() {
    
  }
}