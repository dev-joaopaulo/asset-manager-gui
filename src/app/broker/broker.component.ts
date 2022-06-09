import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { Broker } from './Broker';
import { BrokerService } from './broker.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit{

  constructor(private brokerService: BrokerService, private router: Router) {
    //Subscribes to router events to update brokers list
    router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(
      () => {
        this.getAllBrokers()
      });
  }

  brokers: Broker[] = [];

  ngOnInit(){
    this.getAllBrokers();
  }

  getAllBrokers(){
    this.brokerService.getBrokers().subscribe(
      data => this.brokers = data
    );
  }

  getBroker(){
    this.brokerService.getBrokerById(1).subscribe();
  }

  editBroker(broker: Broker){  }

  deleteBroker(brokerId: number){
    this.brokerService.deleteBroker(brokerId).subscribe(
      data => this.getAllBrokers()
    );
  }


}
