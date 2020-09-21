import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { WsDataModule, WsDataListModule, DebounceButtonModule } from 'ionic-angular-utilities';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WsDataModule,
    WsDataListModule,
    DebounceButtonModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
