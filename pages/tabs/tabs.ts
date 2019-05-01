import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FriendsPage } from '../friends/friends';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = HomePage;
  tab1Root = FriendsPage;
  

  constructor() {

  }
}
