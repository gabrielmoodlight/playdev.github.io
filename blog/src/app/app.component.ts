import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  key = process.env["API_KEY"] || 'KEY';

  constructor(
    private firebase: FirebaseService
  ){

  }

  ngOnInit(): void {
    console.log(this.key);
  }
}
