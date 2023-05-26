import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';

import { GestionExperienceComponent } from './gestion-experience/gestion-experience.component';
import { CreateComponent } from './gestion-experience/create/create.component';
// import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './gestion-experience/update/update.component';
import { GestionProjetComponent } from './gestion-projet/gestion-projet.component';
import { CreateProjetComponent } from './gestion-projet/create/create.component';
import { provideStorage, getStorage } from '@angular/fire/storage';

import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    GestionExperienceComponent,
    CreateComponent,
    UpdateComponent,
    GestionProjetComponent,
    CreateProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
