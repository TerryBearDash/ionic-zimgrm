import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FriendsPage } from '../pages/friends/friends';
import { AddFriendPage } from '../pages/add-friend/add-friend';
import { ImportContactsPage } from '../pages/import-contacts/import-contacts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FriendsPage,
    AddFriendPage,
    ImportContactsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FriendsPage,
    AddFriendPage,
    ImportContactsPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Contacts
  ]
})
export class AppModule {}
