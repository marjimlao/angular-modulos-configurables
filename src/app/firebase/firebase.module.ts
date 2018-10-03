import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './servicios/firebase.service';
import { FirebaseConfig } from './firebase-config.interface';
import { FirebaseConfigToken } from './firebase-config.token';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FirebaseModule { 
  static forRoot(config: FirebaseConfig): ModuleWithProviders {
    return {
      ngModule: FirebaseModule,
      providers: [
        FirebaseService,
        {
          provide: FirebaseConfigToken,
          useValue: config
        }
      ]
    }
  }
}
