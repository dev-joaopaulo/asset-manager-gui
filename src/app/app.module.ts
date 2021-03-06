import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AuthInterceptor } from './auth/auth.interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrokerComponent } from './broker/broker.component';
import { AssetsControlComponent } from './assets-control/assets-control.component';
import { AssetCardListComponent } from './asset-card-list/asset-card-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateBrokerComponent } from './broker/create-broker/create-broker.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { CreateAssetStep1Component } from './create-asset/create-asset-step1/create-asset-step1.component';
import { CreateAssetStep2Component } from './create-asset/create-asset-step2/create-asset-step2.component';
import { AssetComponent } from './asset/asset.component';
import { UpdateBrokerComponent } from './broker/update-broker/update-broker.component';
import { DeleteBrokerComponent } from './broker/delete-broker/delete-broker.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrokerComponent,
    AssetsControlComponent,
    AssetCardListComponent,
    NavbarComponent,
    CreateBrokerComponent,
    CreateAssetComponent,
    CreateAssetStep1Component,
    CreateAssetStep2Component,
    AssetComponent,
    UpdateBrokerComponent,
    DeleteBrokerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
