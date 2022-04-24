import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsControlComponent } from './assets-control/assets-control.component';
import { BrokerComponent } from './broker/broker.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AssetsControlComponent},
  {path: 'brokers', component: BrokerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
