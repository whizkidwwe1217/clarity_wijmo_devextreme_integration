import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import Wijmo modules
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// apply Wijmo license key
import { setLicenseKey } from 'wijmo/wijmo';
import { ClarityGridComponent } from './clarity-grid/clarity-grid.component';
import { WijmoComponentComponent } from './wijmo-component/wijmo-component.component';
import { DevExtremeComponentComponent } from './dev-extreme-component/dev-extreme-component.component';
import {DxSchedulerModule} from 'devextreme-angular';

setLicenseKey('your license key goes here');


setLicenseKey("");

@NgModule({
  declarations: [
    AppComponent,
    ClarityGridComponent,
    WijmoComponentComponent,
    DevExtremeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    WjGridModule,
    DxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
