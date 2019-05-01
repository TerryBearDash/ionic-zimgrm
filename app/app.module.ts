import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FriendsPage } from '../pages/friends/friends';
import { AddFriendPage } from '../pages/add-friend/add-friend';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FriendsPage,
    AddFriendPage
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
    AddFriendPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
