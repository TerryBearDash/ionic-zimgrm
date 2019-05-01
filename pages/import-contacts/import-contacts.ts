import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-import-contacts',
  templateUrl: 'import-contacts.html'
})
export class ImportContactsPage {

  friend = {
    name: null,
    email: null,
    message: null
  }

  contact: Contact = this.contacts.create();

  constructor(
    private viewCtrl: ViewController,
    private contacts: Contacts
  ) { }

  getContacts() {
    console.log(this.contacts);
  }
  createContact() {
    this.contact.name = new ContactName(null, 'Smith', 'John');
    this.contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    this.contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  importContacts() {
    if (this.friend.name && this.friend.email) {
      // submit friend inviteFriend
      this.viewCtrl.dismiss(this.friend);
    }
  }
}