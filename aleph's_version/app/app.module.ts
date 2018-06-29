import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { CalendarioPage } from '../pages/calendario/calendario';
import { AnotacoesPage } from '../pages/anotacoes/anotacoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { ConfigPage } from '../pages/config/config';
import { SobrePage } from '../pages/sobre/sobre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { auth } from 'firebase';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from '../pages/view-note/view-note';

@NgModule({
  declarations: [
    MyApp,
    CalendarioPage,
    AnotacoesPage,
    AddNotePage,
    ViewNotePage,
    PerfilPage,
    ConfigPage,
    SobrePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarioPage,
    AddNotePage,
    AnotacoesPage,
    ViewNotePage,
    PerfilPage,
    ConfigPage,
    SobrePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
  ]
})
export class AppModule {}
