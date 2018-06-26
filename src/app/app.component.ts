import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CalendarioPage } from '../pages/calendario/calendario';
import { PerfilPage } from '../pages/perfil/perfil';
import { AnotacoesPage } from '../pages/anotacoes/anotacoes';
import { ConfigPage } from '../pages/config/config';
import { SobrePage } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;
  pages2: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      { title: 'Perfil', component: PerfilPage},
      { title: 'Calendário', component: CalendarioPage},
      { title: 'Anotações', component: AnotacoesPage},
      { title: 'Configurações', component: ConfigPage},
      { title: 'Sobre', component: SobrePage}
    ];
    
    this.pages2 = {
      homePage: HomePage,
      perfilPage: PerfilPage,
      calendarioPage: CalendarioPage,
      anotacoesPage: AnotacoesPage,
      configPage: ConfigPage,
      sobrePage: SobrePage,
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
