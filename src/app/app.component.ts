import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase/servicios/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.obtenerTitulares();
  }

  crearTitular() {
    this.firebaseService.crearTitular('Titular ' + this.firebaseService.titulares.length);
  }
}
