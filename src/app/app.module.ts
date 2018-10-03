import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirebaseModule } from './firebase/firebase.module';
import { FirebaseConfig } from './firebase/firebase-config.interface';

const firebaseConfig: FirebaseConfig = {
  apiKey: "<apiKey>",
  authDomain: "<authDomain>",
  databaseURL: "<databaseURL>",
  projectId: "<projectId>",
  storageBucket: "<storageBucket>",
  messagingSenderId: "<messagingSenderId>"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule.forRoot(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
