import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '../store/store.module';

import { ServiceLocator } from '../services/locator.service';

import
{
  getHTTP,
  IonicAngularUtilitiesModule
} from 'ionic-angular-utilities';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
		StoreModule,
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md'
    }),
    AppRoutingModule,
    IonicAngularUtilitiesModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HTTP, useClass: getHTTP() },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(private injector: Injector)
  {    
    // Create global Service Injector.
    ServiceLocator.injector = this.injector;
  }
}
