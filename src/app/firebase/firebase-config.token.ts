import { InjectionToken } from "@angular/core";
import { FirebaseConfig } from "./firebase-config.interface";

export const FirebaseConfigToken = new InjectionToken<FirebaseConfig>('FirebaseConfigToken');