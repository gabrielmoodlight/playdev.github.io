import { Injectable } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, push, DatabaseReference } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private config = {
    apiKey: process.env['API_KEY'],
    authDomain: process.env['AUTH_DOMAIN'],
    databaseURL: process.env['DB_URL'],
    projectId: process.env['PROJECT_ID'],
    storageBucket: process.env['STORAGE_BUCKET'],
    messagingSenderId: process.env['MESSAGING_SENDER_ID'],
    appId: process.env['APP_ID'],
    measurementId: process.env['MEASUREMENT_ID'],
  };

  get app() {
    return initializeApp(this.config);
  }

  get analytics() {
    return getAnalytics(this.app)
  }

  private get database() {
    return getDatabase(this.app);
  }

  get refDatabase() {
    return ref(this.database);
  }

  getChild(path: string): DatabaseReference {
    return child(this.refDatabase, path);
  }

  generateKey(ref: DatabaseReference): string | null {
    return push(ref).key;
  }
}
