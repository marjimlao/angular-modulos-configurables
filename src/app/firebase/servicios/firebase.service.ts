import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseConfigToken } from '../firebase-config.token';

@Injectable()
export class FirebaseService {

  titulares: Array<string> = [];

  private database;

  constructor(@Inject(FirebaseConfigToken) config) { 
    firebase.initializeApp(config);

    this.database = firebase.database();
  }

  crearTitular(titular: string) {
    const nuevoTitular = this.database.ref('titulares').push();
    nuevoTitular.set({titular: titular});
  }

  obtenerTitulares() {
    return this.database.ref('titulares').on('child_added', datos => {
      this.titulares.push(datos.val());
    });
  }
}
