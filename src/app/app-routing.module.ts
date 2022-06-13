import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { AssetsControlComponent } from './assets-control/assets-control.component';
import { BrokerComponent } from './broker/broker.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { CreateBrokerComponent } from './broker/create-broker/create-broker.component';
import { LoginComponent } from './login/login.component';
import { UpdateBrokerComponent } from './broker/update-broker/update-broker.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AssetsControlComponent},
  {path: 'brokers', component: BrokerComponent},
  {path: 'new-broker', component: CreateBrokerComponent},
  {path: 'update-broker', component: UpdateBrokerComponent},
  {path: 'assets', component: AssetComponent},
  {path: 'new-asset', component: CreateAssetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
